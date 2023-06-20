import moment from 'moment/moment';
import { useContext, useEffect, useState } from 'react';
import { MdVerified } from "react-icons/md";
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useBuyer from '../../../Hookes/useBuyer';


const Advertices = ({ advertice, setProductsName }) => {
  const [userData, setUserData] = useState({});
  const{user}=useContext(AuthContext)
  const [isBuyer] = useBuyer(user?.email);

  const { name, email, title, location, date, time, image, original, resale, phone, year } = advertice;
  const [loadUserData, setLoadUserData] = useState([]);

  useEffect(() => {

    fetch(`https:server12.vercel.app/users`)
      .then(res => res.json())
      .then(data => setLoadUserData(data))
  }, []);

  useEffect(() => {
    const data = (loadUserData.find(e => e.email === email))
    setUserData(data);
  }, [email, loadUserData])


  return (
    <div>
    <article className="overflow-hidden shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src={image}
        className=" w-full h-72 object-cover"
      />
    
      <div className=' flex justify-end -mt-10'>
        <button className='bg-[#d01818] text-white hover:bg-black font-bold  px-5 py-2'>
          <div className='flex items-center'>
            <del className='text-sm mr-1'>{original}</del>
            <h1 className='text-md'>{resale}</h1>
          </div>
        </button>
    
      </div>
    
      <div className="bg-white p-4 sm:p-6">
        <div className='flex justify-between'>
          <time className="block text-xs text-gray-500">
            {moment(year).format('LL')}
          </time>
          <time className="block text-xs text-gray-500">
            {moment.utc(date).local().startOf("seconds").fromNow()}
          </time>
        </div>
    
        <a href="#">
          <h3 className="mt-5 text-lg text-gray-900">
            {title}
          </h3>
        </a>
        <h4 className=' text-lg flex items-center font-bold'>{name}{userData?.isVerified && <span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
        <p>Location: {location}</p>
        <p>Phone: {phone}</p>
        <div>
          {
            isBuyer && <div><label onClick={()=>setProductsName(advertice)} htmlFor="product-modal" className=" mb-3 mt-6 btn btn-sm w-full text-white hover:text-black bg-[#d01818]">Book Now</label></div>
    
          }
    </div>
      </div>
    </article>
    
    </div>
  );
};

export default Advertices;
