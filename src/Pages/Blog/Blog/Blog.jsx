import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShareContext } from '../../../ShareProvider/ShareProvider';

const Blog = () => {
const{colors}=useContext(ShareContext)
const [isHovering, setIsHovering] = useState(false);
 

const handleMouseEnter = () => {
  setIsHovering(true);
};

const handleMouseLeave = () => {
  setIsHovering(false);
};

    const blogQustion = [
        {
            id: '1',
            question: 'What are the different ways to manage a state in a React application',
            ans: 'In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.'
        },
        {
            id: '2',
            question: 'How does prototypical inheritance work',
            ans: 'The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object.'
        },
        {
            id: '3',
            question: 'What is a unit test? Why should we write unit tests',
            ans: 'The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.'
        },
        {
            id: '4',
            question: 'React vs. Angular vs. Vue',
            ans: 'Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.'
        },
    ]
    return (
        <div className='py-36 md:max-w-[85%] mx-auto'>

            <section className=" text-black">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                        <p className="mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                            aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                            saepe laborum.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {
                blogQustion?.map((blog, i)=> <div key={i}>
                    <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#0a8803]/10 hover:shadow-[#0a8803]/10"
                            href="/services/digital-campaigns"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-[#0a8803]"  style={{color: colors[0]?.color}}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-black">{blog?.question}</h2>

                            <p className="mt-1 text-sm text-justify">{blog?.ans}</p>
                        </a>

                </div>
                )
              }

                    </div>
                    <div className="mt-12 text-center">
                        <Link to='/'><button className="text-[white] border border-[#0a8803] hover:bg-[black] hover:border-white  active:bg-[#0a8803] bg-[#0a8803] text-lg px-12 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={{backgroundColor: isHovering ? 'black' : colors[0]?.color,  border: isHovering ? 'black' : colors[0]?.color,}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Started Today</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;