import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from "axios";
import useBuyer from '../../Hookes/useBuyer';





const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookingData', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://resele-server-side.vercel.app/booking?email=${user?.email}`)
      const data = await res.json()
      return data;
    }
  })






  return (
    <>
      {
        isBuyer && <div>
          <h1 className='text-2xl mb-8 ml-5 text-[#d01818]'>Booking: {bookings.length}</h1>
          <div>

            <div className="overflow-x-auto hidden lg:block">
              <table className="table table-zebra w-full">

                <thead>
                  <tr className='bg-[#d01818] text-white'>
                    <th>SL.No</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    bookings?.map((booking, i) => <tr key={booking._id}>
                      <td data-label='SL.No'>{i + 1}</td>
                      <td data-label='NAME'>{booking.name}</td>
                      <td data-label='PRODUCT'>{booking.title}</td>
                      <td data-label='PRICE'>{booking.price}</td>
                      <td data-label='LOCATION'>{booking.location}</td>
                      <td data-label='PAYMENT'>{
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



          <div className="relative overflow-x-auto lg:hidden">
            {
              bookings?.map((booking, i) => <div key={i} className='ml-5'>
                <table className="w-full text-sm text-left">


                  <tbody>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                        SL.No
                      </th>
                      <td className="px-6 py-4">
                        {i + 1}
                      </td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                        Name
                      </th>
                      <td className="px-6 py-4">
                        {booking.name}
                      </td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                      Product
                      </th>
                      <td className="px-6 py-4">
                        {booking.title}
                      </td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                        Price
                      </th>
                      <td className="px-6 py-4">{booking.price}</td>

                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                       Location
                      </th>
                      <td className="px-6 py-4">{booking.location}</td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                        Payment
                      </th>
                      <td className="px-6 py-4">
                        {
                          booking.price && !booking.paid && <Link to={`/dashboard/payments/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay Now</button></Link>
                        }
                        {
                          booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                        }
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