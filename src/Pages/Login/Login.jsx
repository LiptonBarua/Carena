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
            console.log(user);
            setLoginUserEmail(data.email)
            toast.success('Login Success');
            // navigate(from, {replace: true})
        
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleGoogleSignIn=()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            const user=result.user;
            toast.success('Login Success');
            navigate(from, {replace: true})
        })
        .then(error=>console.log(error))
    }
    return (
        <div className=' flex justify-center items-center my-24' >
            <div data-theme="night" className='w-96 p-7 rounded-lg'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'password must be 6 character longer' } })} className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forgot Password ?</span></label>
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='w-full btn btn-secondary' value='LOGIN' type="submit" />
                </form>
                <p>Don't have an account? <Link to='/signup' className='text-primary'>Sign Up</Link></p>
                <div className='divider'>OR</div>
                <div>
                    {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                </div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;