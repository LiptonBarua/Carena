
import { useQuery } from '@tanstack/react-query';
import React, { } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Pages/Loading/Loading';
import './AllUser.css'

const AllUser = () => {


    const {data:users=[],isLoading, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res= await fetch('https://server12.vercel.app/users')
            const data= await res.json()
            return data;
        }
    })

    const handleMakeAdmin=id=>{
      fetch(`https://server12.vercel.app/users/admin/${id}`,{
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          toast.success('make admin successfully');
          refetch();
        }
         
      })
  }
    const handleMakeVerify=id=>{
      fetch(`https://server12.vercel.app/users/verified/${id}`,{
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          toast.success('make admin successfully');
          refetch();
        }
         
      })
  }
 
  if(isLoading){
    return <Loading></Loading>
  }
  
  const handleDeleteUsers=user=>{

    fetch(`https://server12.vercel.app/users/${user._id}`,{
        method: 'DELETE',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            toast.success('Doctor deleted Successfully')
            refetch()
        }
     
    })
}
    return (
        <div className=''>
        <div className="overflow-x-auto my-10">
<table className="table table-zebra w-full text-black">

  <thead>
    <tr>
      <th></th>
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
      users?.map((user,i)=> <tr key={user._id}>
          <td data-label='S.No'>{i+1}</td>
          <td data-label='NAME'>{user.name}</td>
          <td data-label='EMAIL'>{user.email}</td>
          <td data-label='ROLE'>{user.role==='admin' ? user.role: user.role}</td>
          <td data-label='VERIFIED'>{user?.role ==="Seller" &&  user?.isVerified !=='verified' && user?.role !=="admin"  && <button onClick={()=>handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>Make Verify</button>}</td>
          <td data-label='ADMIN'>{user?.role !=="admin" && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
          <td data-label='DELETE'><button onClick={()=>handleDeleteUsers(user)}>Delete</button></td>               
        </tr>)
   }
  </tbody>
</table>
</div>

      </div>
    );
};

export default AllUser;