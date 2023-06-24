import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ShareContext } from "../../ShareProvider/ShareProvider";


const AddProduct = () => {
const{colors}=useContext(ShareContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext);
    const { profile } = useContext(ShareContext)
    const date = new Date();
    const year = new Date();

    // const imgHostKey = process.env.REACT_APP_imgbb_key;


    const { data: categories = [], reset } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://resele-server-side.vercel.app/category')
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {

        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image);
        const uri = `https://api.imgbb.com/1/upload?key=33de90de0d198f3c751547fa3dc96a5e`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {

                    const product = {
                        // sellerName: user?.displayName,
                        email: user?.email,
                        firstName: data?.firstName,
                        lastName: data?.lastName,
                        title: data?.title,
                        location: data?.location,
                        original: parseFloat(data?.original),
                        time: data?.time,
                        resale: parseFloat(data?.resale),
                        image: imageData.data.url,
                        brand: data?.brand,
                        phone: data?.phone,
                        year,
                        date
                    }
                    fetch(' https://resele-server-side.vercel.app/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Product Add is my Successfully');
                            reset()
                            
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                }
            })
    }
    return (
        <div>
            <h1 className='text-2xl ml-6 text-[#0a8803]' style={{color: colors[0]?.color}}>Product Add</h1>
            <div>

                <div className=' p-7'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">First Name</span></label>
                                <input placeholder='Enter Your First Name' defaultValue={profile[0]?.firstName} readOnly type="text" {...register("firstName", { required: 'Name is Required' })} className="bg-gray-200 input input-bordered w-full" />
                                {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label "><span className="label-text ">Last Name</span></label>
                                <input placeholder='Enter Your Last Name' defaultValue={profile[0]?.lastName} readOnly type="text" required {...register("lastName", { required: 'Name is Required' })} className="bg-gray-200 bg-gray-200 input input-bordered w-full" />
                                {errors.title && <p role="alert" className='text-red-500'>{errors.title?.message}</p>}
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control w-full">
                                <label className="label "><span className="label-text ">Product Name</span></label>
                                <input placeholder='Product Name' type="text" required {...register("title", { required: 'Name is Required' })} className="bg-gray-200 bg-gray-200 input input-bordered w-full" />
                                {errors.title && <p role="alert" className='text-red-500'>{errors.title?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Brand Name</span></label>
                                <select {...register("brand")} required className="select bg-gray-200 input-bordered w-full">
                                    <option disabled selected>Select Your Mobile Brand</option>
                                    {
                                        categories?.map(categorie => <option key={categorie._id} value={categorie.brand}>{categorie.brand}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Location</span></label>
                                <input placeholder='Location' type="text" required {...register("location", { required: 'Location is Required' })} className="bg-gray-200 input input-bordered w-full" />
                                {errors.location && <p role="alert" className='text-red-500'>{errors.location?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Mobile Number</span></label>
                                <input placeholder='Enter Your Mobile Number' required type="text" {...register("phone", { required: 'Phone is Required' })} className="bg-gray-200 input input-bordered w-full" />
                                {errors.phone && <p role="alert" className='text-red-500'>{errors.phone?.message}</p>}
                            </div>

                        </div>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Original Price</span></label>
                                <input placeholder='Original Price' type="text" required {...register("original", { required: 'Name is Required' })} className="bg-gray-200 input input-bordered w-full" />
                                {errors.original && <p role="alert" className='text-red-500'>{errors.original?.message}</p>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Resale Price</span></label>
                                <input placeholder='Resale Price' type="text" required {...register("resale", { required: 'Name is Required' })} className="bg-gray-200 input input-bordered w-full" />
                                {errors.resale && <p role="alert" className='text-red-500'>{errors.resale?.message}</p>}
                            </div>

                        </div>


                        <div className="flex items-center justify-center w-full mt-5">
                            <label for="dropzone-file" className="bg-gray-200 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" required {...register("image", { required: 'Name is Required' })} className="hidden" />
                                {errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
                            </label>
                        </div>



                        <input className='w-36 bg-[#0a8803] px-6 py-2 text-white mt-5' value='Add Product' type="submit" style={{backgroundColor: colors[0]?.color}} />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddProduct;