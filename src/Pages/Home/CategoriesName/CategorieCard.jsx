import React from 'react';
import { Link } from 'react-router-dom';

const CategorieCard = ({categorie}) => {
    const { image, brand} = categorie;
   
    return (
       <div className=''>
          <div className="card card-compact h-[230px] shadow-xl">
        <figure><img className='' src={image} alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
        <p className='text-xl'>{brand}</p>
        </div>
      </div>
       </div>
    );
};

export default CategorieCard;