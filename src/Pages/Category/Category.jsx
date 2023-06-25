import moment from 'moment/moment';
import { useContext, useEffect, useState } from 'react';
import { MdVerified} from "react-icons/md";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useAdmin from '../../Hookes/useAdmin';
import useSaller from '../../Hookes/useSaller';
import useBuyer from '../../Hookes/useBuyer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ShareContext } from '../../ShareProvider/ShareProvider';


const Category = ({products, setProductsName}) => {
    const{firstName, lastName, email, title, location, date, image, original, resale, phone, year} =products;
    const [loadUserData, setLoadUserData] = useState([]);
		const [userData, setUserData] = useState({});
    const{user}=useContext(AuthContext)
    const{colors}=useContext(ShareContext)
  const [isBuyer] = useBuyer(user?.email);

		useEffect(() => {
			
			fetch(` https://resele-server-side.vercel.app/users`)
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
          <div>
            {
              isBuyer && <div><label onClick={()=>setProductsName(products)} htmlFor="product-modal" className=" mb-3 mt-6 btn btn-sm w-full text-white  bg-[#0a8803]" style={{backgroundColor: colors[0]?.color}}>Book Now</label></div>
      
            }
      </div>
        </div>
      </article>
      
      </div>
    );
};

export default Category;

