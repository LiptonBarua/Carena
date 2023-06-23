import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Router, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hookes/useToken';
import { useContext, useState } from 'react';


const SignUp = () => {
    const { createUser, googleSignIn, reset, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmaii, setCreatedUserEmail] = useState('')
    const [signUpError, setSignUpError] = useState('');
    const [token] = useToken(createdUserEmaii);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    const date=new Date();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                toast.success('User Created Successfully');
                navigate('/')
                
            })
            .catch(error => { toast.error(error) })
    }

    const handleSignUp = data => {

        const image=data.image[0];
        const formData=new FormData();
        formData.append('image', image)
        const uri = `https://api.imgbb.com/1/upload?key=33de90de0d198f3c751547fa3dc96a5e`
       fetch(uri, {
        method: "POST",
        body: formData
       })
       .then(res=>res.json())
       .then(imageData=>{
        if(imageData.success){
            createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                
                const userInfo = {
                    displayName: data.firstName,
                    displayLast: data.lastName,
                    email: data.email,
                    role: data.role,
                    image: imageData.data.uri,
                }

                updateUser(userInfo)
                    .then(() => {
                        savedUser(data?.firstName, data?.lastName, data?.email, data?.role, imageData.data.url);
                        toast.success('User Created Successfully');
                        reset();
                    })

                    toast.error('Register Is Not a Successfully')
            })
            .catch(error => {
                setSignUpError(error.message)
            })

        }
       })
 

    
    }



    const savedUser = (firstName, lastName, email, role, image) => {

        const users = {firstName, lastName, email, role, image, date}

        fetch(' https://resele-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }



    return (
        <div className=' flex justify-center items-center py-28 text-white' style={{backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/47/61/288/nissan-skyline-gt-r-r34-v-spec-ii-nissan-skyline-gt-r-r34-nissan-jdm-wallpaper-preview.jpg)`,backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
            <div data-theme="night" className='bg-[#140202] p-7 rounded-lg'>
                <h2 className='text-3xl text-center mb-4 text-white'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">First Name</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("firstName", { required: "First Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.firstName && <p className='text-red-600'>{errors.firstName?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Last Name</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("lastName", { required: "Last Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.lastName && <p className='text-red-600'>{errors.lastName?.message}</p>}
                            </div>
                        </div>

                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Phote</label>
                        <div className="form-control w-full">
                            <input placeholder='' type="file" {...register("image", { required: "Phote is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.phote && <p className='text-red-600'>{errors.phote?.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="text-white label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full bg-gray-50 border border-gray-300" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="text-white label-text">Select Your Role</span></label>
                        <select {...register("role")} className="bg-gray-50 border border-gray-300 select input-bordered w-full">

                            <option>Seller</option>
                            <option>Buyer</option>
                        </select>
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label"><span className="text-white label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'password must be 6 character longer' } })} className="bg-gray-50 border border-gray-300 input input-bordered w-full" />
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <button type='submit' className='rounded-lg bg-[#0a8803] text-white w-full py-2'>Register</button>
                </form>
                <p className='text-white'>Already have an account? <Link to='/login' className='text-[#0a8803]'>Please Login</Link></p>
                <div className='divider text-white'>OR</div>
                {/* {signUpError && <p className='text-red-900'>{signUpError}</p>} */}
                <button onClick={handleGoogleSignIn} className="text-white py-3 rounded-lg text-sm border border-white hover:bg-[#0a8803] hover:text-white hover:border-[#0a8803] active:bg-[#0a8803] text-lg w-full outline-none" type="button">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;