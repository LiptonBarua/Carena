
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Pages/Loading/Loading';
import { HiTrash } from 'react-icons/hi';
import { ShareContext } from '../../ShareProvider/ShareProvider';

const AllUser = () => {
  const{colors}=useContext(ShareContext)


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
      <h1 className='text-2xl lg:mb-10 ml-5 text-[#0a8803]' style={{color: colors[0]?.color}}>All User : {users?.length}</h1>
      <div className='hidden lg:block'>
        <div className="overflow-x-auto ">

          <table className="table table-zebra w-full text-black">

            <thead>
              <tr className='bg-[#0a8803] text-white' style={{backgroundColor: colors[0]?.color}}>
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
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 'admin' ? user.role : user.role}</td>
                  <td>{user?.role === "Seller" && user?.isVerified !== 'verified' && user?.role !== "admin" && <button onClick={() => handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>Make Verify</button>}</td>
                  <td>{user?.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className='bg-[#0a8803] text-white rounded-md py-1 px-2' style={{backgroundColor: colors[0]?.color}}>Make Admin</button>}</td>
                  <td ><button onClick={() => handleDeleteUsers(user)}><HiTrash className='text-2xl text-[#0a8803]' style={{color: colors[0]?.color}}></HiTrash></button></td>
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
                  <th scope="row" className="px-6 py-4 font-medium  text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    SL.No
                  </th>
                  <td className="px-6 py-4">
                    {i + 1}
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    Name
                  </th>
                  <td className="px-6 py-4">
                    {user.name}
                  </td>
                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    Email
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    Role
                  </th>
                  <td className="px-6 py-4">
                    <td>{user.role === 'admin' ? user.role : user.role}</td>
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    Verified
                  </th>
                  <td className="px-6 py-4">
                    {user?.role === "Seller" && user?.isVerified !== 'verified' && user?.role !== "admin" && <button onClick={() => handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>Make Verify</button>}
                  </td>
                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    Admin
                  </th>
                  <td className="px-6 py-4">
                    {user?.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className='bg-[#0a8803] text-white rounded-md py-1 px-2' style={{backgroundColor: colors[0]?.color}}>Make Admin</button>}
                  </td>

                </tr>
                <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium text-white bg-[#0a8803] w-36 whitespace-nowrap" style={{backgroundColor: colors[0]?.color}}>
                    Delete
                  </th>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDeleteUsers(user)}><HiTrash className='text-2xl text-[#0a8803]' style={{color: colors[0]?.color}}></HiTrash></button>
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