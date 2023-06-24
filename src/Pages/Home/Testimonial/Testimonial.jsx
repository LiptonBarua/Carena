import React from 'react';

import Testimonials from './Testimonials';

const Testimonial = () => {
  
    const testimonails = [
        {
            _id: '1',
            img: 'https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583035_1280.jpg',
            name: 'Nick William',
            position: ' Maintainer of Carbon PHP Library',
            title: 'PHPSandbox provides a great experience for our users to test the code right from the documentation. And for any new feature or bug report, we can share code and see the result immediately. For code demo with composer dependencies, its the best!'
        },
        {
            _id: '2',
            img: 'https://previews.123rf.com/images/fizkes/fizkes1907/fizkes190701066/127410740-confident-smiling-middle-aged-business-man-ceo-banker-coach-in-suit-looking-at-camera-male-company.jpg',
            position: ' Maintainer of Carbon PHP Library',
            name: 'James Liam',
            title: 'PHPSandbox provides a great experience for our users to test the code right from the documentation. And for any new feature or bug report, we can share code and see the result immediately. For code demo with composer dependencies, its the best!'
        },
    ]
    return (
        <section className="" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/736/452/852/nissan-skyline-gt-r-nissan-nissan-gtr-nissan-gtr-r34-wallpaper-preview.jpg)`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}>
            <div className="flex py-24 bg-[#000000c2] bg-opacity-80 flex-col p-6 mx-auto sm:py-12 lg:pt-32 lg:flex-row lg:justify-between">
                <section className="md:max-w-[85%] mx-auto">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-y-20 md:-mb-28'>
                   {
                    testimonails?.map((testimonail)=> <Testimonials key={testimonail._id} testimonail={testimonail}></Testimonials>)
                   }
                       
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Testimonial;