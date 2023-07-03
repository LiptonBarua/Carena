import { useContext, useEffect, useState } from "react";
import { ShareContext } from "../../../ShareProvider/ShareProvider";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css'


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


  useEffect(()=>{
    setInterval(()=>{
      setCurrentDateTime(new Date())
    })
  },1000)

  return (
   <div style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/20/744/HD-wallpaper-black-pattern-black-design-modern.jpg)`}}>
     <div className='flex justify-center py-8 text-white'>
     <div>
     <Clock className='bg-info text-black rounded-full' value={currentDateTime} renderNumbers={true}></Clock>
     <div className=' rounded-md shadow-lg px-3 mt-3 shadow-[#ffffff]' style={{boxShadow: colors[0]?.color}}>
     <p className="text-2xl lg:text-3xl font-bold">{formatTime(currentDateTime)}</p>
      <p>{formatDay(currentDateTime)} {formatDate(currentDateTime)}</p>
     </div>
     </div>
    </div>
   </div>
  );
};

export default TimeZone;
