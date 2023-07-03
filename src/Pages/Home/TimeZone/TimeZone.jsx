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
  //  <div style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/20/744/HD-wallpaper-black-pattern-black-design-modern.jpg)`}}>
  //    <div className=' py-8 text-white'>
  //    <div className="mx-auto">
  //    <Clock className='bg-info text-black rounded-full' value={currentDateTime} renderNumbers={true}></Clock>
  //    <div className='rounded-md px-3 mt-3 shadow-[#ffffff]' style={{boxShadow: colors[0]?.color}}>
  //    <p className="text-2xl lg:text-3xl font-bold">{formatTime(currentDateTime)}</p>
  //     <p>{formatDay(currentDateTime)} {formatDate(currentDateTime)}</p>
  //    </div>
  //    </div>
  //   </div>
  //  </div>

  <div>
    <section style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/20/744/HD-wallpaper-black-pattern-black-design-modern.jpg)`}}>
	<div className="container flex flex-col items-center justify-center p-4 mx-auto">
    <Clock className='bg-info text-black rounded-full' value={currentDateTime} renderNumbers={true}></Clock>
		<div className="text-white mt-3 shadow-[#ffffff] shadow-lg px-3">
    <p className="max-w-2xl text-center text-2xl lg:text-3xl font-bold">{formatTime(currentDateTime)}</p>
    <p className="max-w-2xl text-center">{formatDay(currentDateTime)} {formatDate(currentDateTime)}</p>
    </div>

	</div>
</section>
  </div>
  );
};

export default TimeZone;
