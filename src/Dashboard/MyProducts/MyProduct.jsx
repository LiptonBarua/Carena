import moment from 'moment';
import { MdVerified} from "react-icons/md";
import {HiOutlineTrash } from "react-icons/hi";
import { useContext, useEffect, useState } from 'react';
import { ShareContext } from '../../ShareProvider/ShareProvider';
import useBuyer from '../../Hookes/useBuyer';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const MyProduct = ({product, handleDeleteProduct, handleAdvertice}) => {
  const{_id,image,email, title, location, phone, date, original, resale, firstName, lastName, year, advertice} =product;
  const [loadUserData, setLoadUserData] = useState([]);
  const [userData, setUserData] = useState({});
  const{user}=useContext(AuthContext)
const{colors}=useContext(ShareContext)
const [isBuyer] = useBuyer(user?.email);



  useEffect(() => {
    
    fetch(`https://server12.vercel.app/users`)
      .then(res => res.json())
    .then(data => setLoadUserData(data))
  }, []);

useEffect(() => {
  const data = (loadUserData.find(e => e.email === email) )
  setUserData(data);
}, [email, loadUserData])


const [isHovering, setIsHovering] = useState(false);
 

const handleMouseEnter = () => {
  setIsHovering(true);
};

const handleMouseLeave = () => {
  setIsHovering(false);
};

    return (
        <div>
          {
            !advertice &&  <div>
            <article className="overflow-hidden shadow transition hover:shadow-lg">
              <img
                alt="Office"
                src={image}
                className=" w-full h-72 object-cover"
              />
            
              <div className=' flex justify-end -mt-10'>
                <button className='bg-[#0a8803] text-white hover:bg-black font-bold  px-5 py-2' style={{backgroundColor: isHovering ? 'black' : colors[0]?.color,  border: isHovering ? 'black' : colors[0]?.color,}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                <h4 className=' text-lg flex items-center font-bold'>{firstName} {lastName}{userData?.isVerified && <span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
                <p>Location: {location}</p>
                <p>Phone: {phone}</p>
                <div className='flex justify-between mt-4'>
                <button onClick={()=>handleAdvertice(_id)} className="">Advertise</button>
               <button onClick={()=>handleDeleteProduct(_id)} className="text-3xl text-[#0a8803]" style={{color: colors[0]?.color}}><HiOutlineTrash></HiOutlineTrash></button>
               </div>
              </div>
            </article>
            
            </div>
          }
        </div>
    );
};

export default MyProduct;

