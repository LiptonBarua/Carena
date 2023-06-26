import { useContext, useEffect, useState } from "react";
import {BsWatch} from "react-icons/bs";
import { ShareContext } from "../../../ShareProvider/ShareProvider";


const TimeZone = () => {
  const{colors}=useContext(ShareContext)
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let period = '';

    if (hours > 12) {
      hours -= 12;
      period = 'PM';
    } else {
      period = 'AM';
    }

    return `${hours}:${minutes}:${seconds} ${period}`;
  };

  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatDay = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();

    return days[dayIndex];
  };


  return (
   <div style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/20/744/HD-wallpaper-black-pattern-black-design-modern.jpg)`}}>
     <div className='flex justify-center pt-5 pb-10 text-white'>
     <div>
     <img src="https://i.ibb.co/NSqyvK0/618-XO0-Z6-S7-L-AC-UF350-350-QL80-removebg-preview.png" alt="" className="w-32 h-32 mx-auto rounded-full" />
     <div className='p-3 mt-3 rounded-md shadow-lg shadow-[#ffffff]' style={{boxShadow: colors[0]?.color}}>
     <p className="text-2xl lg:text-3xl font-bold">{formatTime(currentDateTime)}</p>
      <p>{formatDay(currentDateTime)} {formatDate(currentDateTime)}</p>
      <p></p>
     </div>
     </div>
    </div>
   </div>
  );
};

export default TimeZone;
