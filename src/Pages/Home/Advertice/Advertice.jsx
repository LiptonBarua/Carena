
import { useEffect, useState } from 'react';
import Advertices from './Advertices';
import AdverticeModel from './AdverticeModel';

const Advertice = () => {
  const[limit, setLimit] = useState(3)
  
    const[advertices, setAdvertice]=useState([])
    const slice= advertices.slice(0, limit)
 
    const [productsName, setProductsName] = useState('')
  
    const loadMore=()=> {
      setLimit(limit+limit)
   }
    useEffect(()=>{
      fetch(` https://resele-server-side.vercel.app/products?advertice=true`)
      .then(res=>res.json())
      .then(data=>{
      
        setAdvertice(data)
        
      })
    },[])




    return (
        <div className='py-24 md:max-w-[92%] mx-auto'>
           <div className='mb-24'>
           <h1 className='text-2xl lg:text-4xl text-center'>Featured Vehicles</h1>
           <p className='text-center'>Tempor incididunt duis labore dolore magna aliqua sed ipsum</p>
           </div>
            <div className='px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
               slice.map(advertice=><Advertices key={advertice._id} advertice={advertice} setProductsName={setProductsName}></Advertices>)
              }
        </div>
        <div>
        <AdverticeModel key={slice._id} slice={slice} productsName={productsName} ></AdverticeModel>
       </div>
        </div>
    );
};

export default Advertice;