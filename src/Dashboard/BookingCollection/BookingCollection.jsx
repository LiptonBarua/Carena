
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../Hookes/useBuyer';
import { ShareContext } from '../../ShareProvider/ShareProvider';
import { HiTrash } from 'react-icons/hi';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import moment from 'moment/moment';




const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);
  const { colors } = useContext(ShareContext);


  const { data: bookings = [], refetch:bookingRefetch } = useQuery({
    queryKey: ['bookingData', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://resele-server-side.vercel.app/booking?email=${user?.email}`)
      const data = await res.json()
      return data;
    }
  })



  const handleDelete = (id) => {
    fetch(`https://resele-server-side.vercel.app/booking/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data=>{
        if(data.deletedCount > 0){
          toast.success('Booking Data delete Successfully')
          bookingRefetch()
        }
      })
      .catch(error=>{
        toast.error('Booking Data delete is not Successfully')
      })
  }



  return (
    <>
      {
        isBuyer && <div>
          <h1 className='text-2xl lg:mb-8 ml-5 mt-4 font-bold text-[#0a8803]' style={{ color: colors[0]?.color }}>Booking: {bookings.length}</h1>
          <div>

            <div className="overflow-x-auto hidden lg:block">
              <table className="table table-zebra w-full">

                <thead>
                  <tr className='bg-[#0a8803] text-white' style={{ backgroundColor: colors[0]?.color }}>
                    <th>SL.No</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Payment</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    bookings?.map((booking, i) => <tr key={booking._id}>
                      <td data-label='SL.No'>{i + 1}</td>
                      <td data-label='NAME'>{booking.firstName} {booking.lastName}</td>
                      <td data-label='PRODUCT'>{booking.title}</td>
                      <td data-label='PRICE'>{booking.price}</td>
                      <td data-label='LOCATION'>{booking.location}</td>
                      <td data-label='LOCATION'>{moment(booking.date).format('LL')}</td>
                      <td data-label='PAYMENT'>{
                        booking.price && !booking.paid && <Link to={`/dashboard/payments/${booking._id}`}><button className='bg-[#0a8803] text-white px-4 py-2' style={{ backgroundColor: colors[0]?.color }}>Pay Now</button></Link>
                      }
                        {
                          booking.price && booking.paid && <span className='text-green-500' style={{ color: colors[0]?.color }}>Paid</span>
                        }
                      </td>
                      <td><button onClick={() => handleDelete(booking._id)}><HiTrash className='text-2xl text-[#0a8803]' style={{ color: colors[0]?.color }}></HiTrash></button></td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>



          <div className="relative overflow-x-auto lg:hidden">
            {
              bookings?.map((booking, i) => <div key={i} className='ml-5 mt-8'>
                <table className="w-full text-sm text-left">


                  <tbody>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        SL.No
                      </th>
                      <td className="px-6 py-4">
                        {i + 1}
                      </td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Name
                      </th>
                      <td className="px-6 py-4">
                        {booking.name}
                      </td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Product
                      </th>
                      <td className="px-6 py-4">
                        {booking.title}
                      </td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Price
                      </th>
                      <td className="px-6 py-4">{booking.price}</td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Location
                      </th>
                      <td className="px-6 py-4">{booking.location}</td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Date
                      </th>
                      <td className="px-6 py-4">{moment(booking.date).format('LL')}</td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Payment
                      </th>
                      <td className="px-6 py-4">
                        {
                          booking.price && !booking.paid && <Link to={`/dashboard/payments/${booking._id}`}><button className='bg-[#0a8803] text-white px-4 py-2' style={{ backgroundColor: colors[0]?.color }}>Pay Now</button></Link>
                        }
                        {
                          booking.price && booking.paid && <span className='text-green-500' style={{ color: colors[0]?.color }}>Paid</span>
                        }
                      </td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{ backgroundColor: colors[0]?.color }}>
                        Delete
                      </th>
                      <td className="px-6 py-4">
                        <button><HiTrash className='text-2xl text-[#0a8803]' style={{ color: colors[0]?.color }}></HiTrash></button>
                      </td>

                    </tr>

                  </tbody>
                </table>
              </div>)
            }

          </div>
        </div>
      }
    </>
  );
};

export default Bookings;