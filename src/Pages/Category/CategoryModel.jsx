import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CategoryModel = ({ productsName}) => {
   
    const { user } = useContext(AuthContext);
    const{title, resale} =productsName;

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const price= form.price.value;
        const location= form.location.value;
        const phone= form.phone.value;


        const booking={
            email,
            name,
            price,
            location,
            phone,
            title
        }

        console.log(booking)
        fetch('https://server12.vercel.app/booking', {
            method: 'POST',
            headers: {
               
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
               
                toast.success('Booking add Successfully');
            
            }
          
        })
    }

    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <form onSubmit={handleSubmit}>
                      
                        <input type="text" name='name'  defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered input-info w-full my-3" /><br />
                        <input type="number" defaultValue={resale} name='price'  placeholder="Price" className="input input-bordered input-info w-full mt-3" /><br />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="Type here" className="input input-bordered input-info w-full" />
                        <input type="text"  name='location'  placeholder="Meeting Location" required className="input input-bordered input-info w-full my-3" /><br />
                        <input type="number" name='phone' placeholder="Phone Name" required className="input input-bordered w-full mb-3" /><br />
                       
                        <button type='submit'> <label htmlFor="product-modal" className="btn btn-sm w-full bg-[#d01818]">Submit</label></button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CategoryModel;

 