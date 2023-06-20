
import { useQuery } from '@tanstack/react-query';
import React, { } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Pages/Loading/Loading';
import { HiTrash } from 'react-icons/hi';

const AllUser = () => {


  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch(' https://resele-server-side.vercel.app/users')
      const data = await res.json()
      return data;
    }
  })

  const handleMakeAdmin = id => {
    fetch(` https://resele-server-side.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('make admin successfully');
          refetch();
        }

      })
  }
  const handleMakeVerify = id => {
    fetch(` https://resele-server-side.vercel.app/users/verified/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('make admin successfully');
          refetch();
        }

      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  const handleDeleteUsers = user => {

    fetch(` https://resele-server-side.vercel.app/users/${user._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Doctor deleted Successfully')
          refetch()
        }

      })
  }
  return (
    <div className=''>
      <h1 className='text-2xl mb-10 ml-5 text-[#d01818]'>All User : {users?.length}</h1>
      <div className='hidden lg:block'>
        <div className="overflow-x-auto ">

          <table className="table table-zebra w-full text-black">

            <thead>
              <tr className='bg-[#d01818] text-white'>
                <th>SL.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Verified</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                users?.map((user, i) => <tr key={user._id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 'admin' ? user.role : user.role}</td>
                  <td>{user?.role === "Seller" && user?.isVerified !== 'verified' && user?.role !== "admin" && <button onClick={() => handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>Make Verify</button>}</td>
                  <td>{user?.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                  <td ><button onClick={() => handleDeleteUsers(user)}><HiTrash className='text-2xl text-[#d01818]'></HiTrash></button></td>
                </tr>)
              }
            </tbody>
          </table>


        </div>
      </div>



      <div className="relative overflow-x-auto lg:hidden">
        {
          users?.map((user, i) => <div key={i} className='ml-5 mt-8'>
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
                    {user.name}
                  </td>
                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                    Email
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                    Role
                  </th>
                  <td className="px-6 py-4">
                    <td>{user.role === 'admin' ? user.role : user.role}</td>
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                    Verified
                  </th>
                  <td className="px-6 py-4">
                    {user?.role === "Seller" && user?.isVerified !== 'verified' && user?.role !== "admin" && <button onClick={() => handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>Make Verify</button>}
                  </td>
                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                    Admin
                  </th>
                  <td className="px-6 py-4">
                    {user?.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-black text-white bg-[#d01818] w-36 whitespace-nowrap">
                    Delete
                  </th>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDeleteUsers(user)}><HiTrash className='text-2xl text-[#d01818]'></HiTrash></button>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>)
        }

      </div>

    </div>
  );
};

export default AllUser;