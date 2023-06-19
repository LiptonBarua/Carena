import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from "axios";
import useBuyer from '../../Hookes/useBuyer';
import './Booking.css'




const Bookings = () => {
   const {user} = useContext(AuthContext);
   const [isBuyer] = useBuyer(user?.email);

  const [bookings, setPost] = React.useState(null);
  const baseURL = `https://server12.vercel.app/booking`;

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, [user?.email]);
  
    if (!bookings) return null;







    return (
   <>
{
     isBuyer && <div>
     <h1 className='text-2xl mt-10 mb-6'>My Orders: {bookings.length}</h1>
           <div>
           
           <div className="overflow-x-auto">
   <table className="table table-zebra w-full">
 
     <thead>
       <tr>
         <th></th>
         <th>Name</th>
         <th>Product</th>
         <th>Price</th>
         <th>Location</th>
         <th>Payment</th>
       </tr>
     </thead>
     <tbody>
     
      {
         bookings?.map((booking,i)=> <tr key={booking._id}>
             <td  data-label='SL.No'>{i+1}</td>
             <td  data-label='NAME'>{booking.name}</td>
             <td  data-label='PRODUCT'>{booking.title}</td>
             <td  data-label='PRICE'>{booking.price}</td>
             <td  data-label='LOCATION'>{booking.location}</td>
             <td  data-label='PAYMENT'>{
             booking.price && !booking.paid && <Link to={`/dashboard/payments/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay Now</button></Link>
             }
             {
               booking.price && booking.paid && <span className='text-green-500'>Paid</span>
             }
             </td>
           </tr>)
      }
     </tbody>
   </table>
 </div>
         </div>
    </div>
}
   </>
    );
};

export default Bookings;