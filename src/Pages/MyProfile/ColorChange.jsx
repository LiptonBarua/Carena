import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const ColorChange = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)

    const handleColor = (data) => {
        const colorData = {
            color:data?.color,
            email: user?.email
        }
        console.log(colorData)

        fetch(`https://resele-server-side.vercel.app/color?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(colorData)
    
        })

        .then(res=>res.json())
        .then(data=>{
            toast.success('Color Change Successfully')
        })
        .catch('color change is not a successfully')
    }
    return (
        <div className='flex justify-between'>
        <h1 className="text-lg font-bold text-black m-6 ">Profile Information</h1>
             <div>
     {/* <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} /> */}
     <form onSubmit={handleSubmit(handleColor)}>

<div className='flex items-center'>
         <div className="form-control w-full">
             <select  {...register("color")} required className="select bg-white w-full">
                 <option disabled selected>Sellect Your Color</option>
                 <option>red</option>
                 <option>green</option>
                 <option>blue</option>
                 <option>#d01818</option>
                 <option>#0a8803</option>
             </select>
         </div>
         <input className='w-36 bg-[#0a8803] px-6 py-2 text-white' value='Submit' type="submit" />
         </div>
     </form>
 </div>
        </div>
    );
};

export default ColorChange;