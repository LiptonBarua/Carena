import { useEffect, useState } from "react";
import {BsWatch} from "react-icons/bs";


const TimeZone = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date, options) => {
    return date.toLocaleTimeString(undefined, options);
  };

  return (
   <div style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/20/744/HD-wallpaper-black-pattern-black-design-modern.jpg)`}}>
     <div className='flex justify-center text-white text-2xl lg:text-4xl pt-5 pb-10 font-bold'>
     <div>
     <img src="https://i.ibb.co/NSqyvK0/618-XO0-Z6-S7-L-AC-UF350-350-QL80-removebg-preview.png" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
      <p className=''>Local Time: {formatTime(currentTime)}</p>
     </div>
    </div>
   </div>
  );
};

export default TimeZone;
