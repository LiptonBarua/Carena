import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import MyProduct from './MyProduct';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const MyProducts = () => {

    const {user} = useContext(AuthContext);


 const {data:myProducts=[], refetch, isLoading}=useQuery({
        queryKey:['myProducts'],
        queryFn: async()=>{
            const res=await fetch(`https://server12.vercel.app/product?email=${user?.email}`)
            const data= await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
  
    }
    const handleDeleteProduct=id=>{
        fetch(`https://server12.vercel.app/product/${id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.success('Doctor deleted Successfully');
                
                refetch()
            }
         
        }) 
    }


    const handleAdvertice=_id=>{
      fetch(`https://server12.vercel.app/advertice/${_id}`,{
        method: 'PUT',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }

      })
      .then(res=>res.json())
      .then(data=>{
    
        if(data.acknowledged>0){
            toast.success('advertice added Successfully');
            refetch()
        }
      })

    }
    return (
    


<section className='py-36 md:max-w-[92%] mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

{
                myProducts.map(product=><MyProduct key={product._id} product={product} handleDeleteProduct={handleDeleteProduct} handleAdvertice={handleAdvertice}></MyProduct>)
            }
</div>

<div>
</div>

</section>
    );
};

export default MyProducts;