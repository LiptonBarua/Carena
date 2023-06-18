import React from 'react';

const ContactMap = () => {
    return (
        <div>
            <section className="md:flex h-auto bg-black">
                <div className=" w-full px-5 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8">
                   <div className='mb-8'>
                   <p className='text-white'>Get in Touch</p>
                    <h1 className='text-white font-semibold text-3xl pb-5'>Send Us Message</h1>
                    <p className='text-white'>MotorLand is nisi aliquip exa con velit esse cillum dolore fugiatal sint ipsum occaecat excepteur ipsum dolor sit amet consectetur.</p>
                   </div>
                    <form action="" className="space-y-4">


                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-auto">
                            <div>
                                <label className="text-white" for="email">Name</label>
                                <input className="w-full border-gray-200 p-3 text-sm" placeholder="" name='name' type="name" />
                            </div>

                            <div>
                                <label className="text-white" for="email">Email</label>
                                <input className="w-full border-gray-200 p-3 text-sm" placeholder="" name='email' type="email" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                                <label className='text-white' for="phone">Phone</label>
                                <input className="w-full border-gray-200 p-3 text-sm" placeholder="" name='phone' type="number" />
                            </div>

                            <div>
                                <label className='text-white' for="phone">Subject</label>
                                <input className="w-full border-gray-200 p-3 text-sm" placeholder="" name='subject' type="text" />
                            </div>
                        </div>



                        <div>
                            <label className="text-white" for="message">Message</label>

                            <textarea className="w-full border-gray-200 p-3 text-sm" placeholder=""
                                type='text'
                                name='message'
                                rows="6"

                            ></textarea>
                        </div>

                        <div className="mt-4 ms-auto">
                            <button type="submit" className="inline-block w-full bg-[#d01818] text-white  hover:bg-white hover:text-black px-8 py-3 font-medium text-black uppercase hover:text-white sm:w-auto" style={{ transitionDuration: `2s` }}>Send Message</button>
                        </div>
                    </form>


                </div>

                <div className=" lg:w-1/2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.573489111011!2d91.84162477447407!3d22.369727890376875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2777c9c1cf83%3A0xb8796c419fa1021b!2sBahaddarhat%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1684591968657!5m2!1sen!2sbd" className='h-72 md:h-full w-full px-5 md:px-0' style={{ border: `0` }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </section>
        </div>
    );
};

export default ContactMap;