import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hookes/useToken';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn} = useContext(AuthContext);
    const[loginUserEmail, setLoginUserEmail]=useState('');
    const[token] =useToken(loginUserEmail)
    const navigate = useNavigate();
    const location= useLocation();

  

    const from = location.state?.from?.pathname || '/';
    
    useEffect(()=>{
        if(token){
            navigate(from, {replace: true})
        }
    }, [from, navigate, token])
    
    const googleProvider = new GoogleAuthProvider();
    
    const handleLogin = data => {
        signIn(data.email, data.password)
        .then(result=>{
            const user= result.user;
         
            setLoginUserEmail(data.email)
            toast.success('Login Success');
            // navigate(from, {replace: true})
        
        })
        .catch(error=>{
            toast.error(error)
        })
    }

    const handleGoogleSignIn=()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            const user=result.user;
            toast.success('Login Success');
            navigate(from, {replace: true})
        })
        .then(error=>{toast.error(error)})
    }
    return (
        <div className='flex justify-center items-center py-28' style={{backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/47/61/288/nissan-skyline-gt-r-r34-v-spec-ii-nissan-skyline-gt-r-r34-nissan-jdm-wallpaper-preview.jpg)`,backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
            <div data-theme="night" className='bg-[#140202] w-96 p-7 rounded-lg'>
                <h2 className='text-3xl text-center text-white'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="text-white label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full " />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="text-white label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'password must be 6 character longer' } })} className="input input-bordered w-full " />
                        <label className="label"><span className="text-white label-text">Forgot Password ?</span></label>
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                   <button type='submit' className='rounded-lg bg-[#0a8803] text-white w-full py-2'>Login</button>
                </form>
                <p className='text-white'>Don't have an account? <Link to='/signup' className='text-[#0a8803] '>Sign Up</Link></p>
                <div className='divider text-white'>OR</div>
              
                <button onClick={handleGoogleSignIn} className="text-white py-3 rounded-lg text-sm border border-white hover:bg-[#0a8803] hover:text-white hover:border-[#0a8803] active:bg-[#0a8803] text-lg w-full outline-none" type="button">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;