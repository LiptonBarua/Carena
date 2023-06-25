
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { ShareContext } from '../../ShareProvider/ShareProvider';

const CategoryModel = ({productsName}) => {
   
    const { user } = useContext(AuthContext);
    const{title, resale} =productsName;
    const{colors, profile}=useContext(ShareContext)


    const date= new Date()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const price= form.price.value;
        const location= form.location.value;
        const phone= form.phone.value;


        const booking={
            email,
            firstName,
            lastName,
            price,
            location,
            phone,
            title,
            date
        }

     
        fetch(' https://resele-server-side.vercel.app/booking', {
            method: 'POST',
            headers: {
               
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          
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
                      <div className='grid grid-cols-2 gap-4'>
                      <input type="text" name='firstName'  defaultValue={profile[0]?.firstName} readOnly placeholder="Full Name" className="input input-bordered input-info w-full mt-3" />
                      <input type="text" name='lastName'  defaultValue={profile[0]?.lastName} readOnly placeholder="Full Name" className="input input-bordered input-info w-full mt-3" />
                      </div>
                        <input type="number" defaultValue={resale} readOnly name='price'  placeholder="Price" className="input input-bordered input-info w-full my-3" /><br />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="Type here" className="input input-bordered input-info w-full" />
                        <input type="text"  name='location'  placeholder="Meeting Location" required className="input input-bordered input-info w-full my-3" /><br />
                        <input type="number" name='phone' placeholder="Phone Name" required className="input input-bordered input-info w-full mb-3" /><br />
                       
                        <button type='submit'> <label htmlFor="product-modal" className="btn btn-sm w-full text-white bg-[#0a8803]" style={{backgroundColor: colors[0]?.color}}>Submit</label></button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CategoryModel;

 