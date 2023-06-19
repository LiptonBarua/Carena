
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategorieCard from './CategorieCard';
import { Link } from 'react-router-dom';


const CategoriesName = () => {
    const {data: categories=[]} = useQuery({
        queryKey: ['categories'],
        queryFn: async()=>{
            const res=await fetch('https://server12.vercel.app/category')
            const data= res.json();
            return data;
        }
    })
    return (
        <div className='my-10 md:max-w-[90%] md:mx-auto'>
            <h1 className='text-2xl text-center mb-6'>All Category</h1>
            <div className='px-5 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                categories?.map(categorie=><Link to={`/category/${categorie.brand}`}><CategorieCard key={categorie._id} categorie={categorie}></CategorieCard></Link>)
            }
            </div>
        </div>
    );
};

export default CategoriesName;