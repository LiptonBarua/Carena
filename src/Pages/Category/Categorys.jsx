
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import CategoryModel from './CategoryModel';
import { useState } from 'react';



const Categorys = () => {
 
  const [productsName, setProductsName] = useState('')

  const products= useLoaderData();


    return (
      <section className='py-36 md:max-w-[92%] mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        
        {
          products?.map(products=><Category key={products._id} products={products} setProductsName={setProductsName}></Category>)
        }
       </div>
    
       <div>
        <CategoryModel key={products._id} products={products} productsName={productsName} ></CategoryModel>
       </div>
       {/* <button className='btn btn-info'>See More</button> */}
      </section>
    );
};

export default Categorys;