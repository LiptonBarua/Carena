import { useEffect, useState } from "react";



const TimeZone = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
   <div style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/20/744/HD-wallpaper-black-pattern-black-design-modern.jpg)`}}>
     <div className='text-center'>
      <p className=' text-white text-2xl lg:text-4xl py-16 font-bold'>{date.toLocaleString()}</p>
    </div>
   </div>
  );
};

export default TimeZone;
