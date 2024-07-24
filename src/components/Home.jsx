import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import pic2 from "../../public/th.jpg";
function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
               <span className='text-xl'>Hi, I'm Harsh kumar kumawat</span>
               <div className='flex space-x-1 text-2xl md:text-4xl'>
               <h1>I'm a </h1>
               {/* <span className='text-red-700 font-bold'>Developer</span> */}
               <ReactTyped className='text-red-700 font-bold'
          strings={["Developer","Coder","Programmer","Data Scientist","Fast Learner"]}
          typeSpeed={60}
          loop={true}
        />
               </div>
               <br />
               <p className='text-sm md:text-md text-justify'>I am a Computer Science Student at UEM Jaipur. I enjoy problem-solving and DSA coding. I have worked on technologies like Web Development with HTML , CSS , JavaScript , React-js, Tailwind, Android Development with Java , XML  , Machine Learning with Python. I have done some real-time experience which helped me strengthen my experience in Web Development , Android Development , C , C++ , Python , Flask , Ngrok.......</p>
               <p className='text-sm md:text-md text-justify'>I am passionate about developing real time applications impacting millions of users.
               </p>
               <br />
               {/* {Icon} */}
               <div className='flex flex-col md:flex-row md:justify-between '>
                <div>
                <h1 className='font-bold text-green-500'>Available on</h1>
                <div>
                    <ul className='flex space-x-5 mt-3'>
                        <li>
                            <a href="https://github.com/harsh8956" target="_blank">
                            <FaGithub className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/harsh-kumawat-2984a32a9/" target="_blank">
                            <FaLinkedin className='text-2xl cursor-pointer text-blue-600 '/>
                        </a>
                        </li>
                        <li>
                        <a href="https://x.com/HarshKum4003?s=09" target="_blank">
                            <FaXTwitter className='text-2xl cursor-pointer' />
                        </a>
                        </li>
                        <li>
                        <a href="http://" target="_blank">
                            <FaTelegram className='text-2xl cursor-pointer text-cyan-400' />
                        </a>
                        </li>
                    </ul>
                </div>
                </div>
                <div>
                <h1 className='font-bold text-green-500 mt-4 md:mt-0'>Currently Working on</h1>
                <ul className='flex space-x-5 mt-3'>
                        <li>
                            <a href="https://react.dev/" target="_blank">
                            <FaReact className='text-cyan-400 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2'/>
                            </a>
                        </li>
                        <li>
                        <a href="https://nodejs.org/en" target="_blank">
                        <TbBrandJavascript className='text-orange-500 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2' />
                        </a>
                        </li>
                        <li>
                        <a href="https://tailwindcss.com/" target="_blank">
                        <RiTailwindCssFill className='text-cyan-400 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2' />
                        </a>
                        </li>
                    </ul>
                </div>
               </div>

            </div>
            <div className='flex justify-center md:w-1/2 md:ml-48 mt-8 md:mt-20 order:1 md:order-2'>
                <img src={pic2} className='rounded-full w-[200px] h-[200px] justify-center md:w-[450px] md:h-[450px]' alt="" />
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
