import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import pic from "../../public/H.png";
function Navebar() {
    const [menu,setmenu]=useState(false)
    const navitem=[
        {
            id:1,
            text:"Home",
        },
        {
            id:2,
            text:"About",
        },
        {
            id:3,
            text:"Project",
        },
        {
            id:4,
            text:"Experiance",
        },
        {
            id:5,
            text:"Contact",
        },
    ]
  return (
    <>
    <div className='bg-white max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} alt="" className='h-12 w-12 rounded-full' />
                <h1 className='font-semibold text-xl cursor-pointer'>HARSH
                <p className='text-sm'>Software Developer</p>
                </h1>
            </div>
            {/* desktop navbar */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navitem.map(({id,text})=>(
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                               <Link to={text}
                               smooth={true}
                               duration={500}
                               offset={-70}
                               activeClass="active"
                               >{text}</Link> </li>
                        ))
                    }
                </ul>
                <div onClick={()=>setmenu(!menu)} className='md:hidden '>
                {menu?<AiOutlineMenu size={24}/>:<RxCross2 size={24}/>}
                </div>
            </div>
        </div>
             {/* mobile navbar */}
        {
            !menu &&(
            <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                   {
                        navitem.map(({id,text})=>(
                            <li className='hover:scale-105 duration-200 font font-semibold cursor-pointer' key={id}>
                                <Link to={text}
                                onClick={()=>setmenu(!menu)}
                               smooth={true}
                               duration={500}
                               offset={-70}
                               activeClass="active"
                               >{text}</Link>
                            </li>
                        ))
                    }
            </ul>
        </div>  
            )
        }
        
    </div>
    </>
  )
}

export default Navebar
