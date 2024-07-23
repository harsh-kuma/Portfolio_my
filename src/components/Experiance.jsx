import React from 'react'
import pic2 from "../../public/css1.png"
import pic1 from "../../public/html1.png"
import pic6 from "../../public/java.png"
import pic3 from "../../public/Js.png"
import pic4 from "../../public/node.png"
import pic8 from "../../public/python.jpg"
import pic5 from "../../public/rect.jpg"
import pic7 from "../../public/xml.png"

function Experiance() {
    const cardItem=[
        {
            id:1,
            logo:pic1,
            name:"HTML"
        },
        {
            id:2,
            logo:pic2,
            name:"CSS"
        },
        {
            id:3,
            logo:pic3,
            name:"JavaScript"
        },
        {
            id:4,
            logo:pic4,
            name:"Node-js"
        },
        {
            id:5,
            logo:pic5,
            name:"React-js"
        },
        {
            id:6,
            logo:pic6,
            name:"JAVA"
        },
        {
            id:7,
            logo:pic7,
            name:"XML"
        },
        {
            id:8,
            logo:pic8,
            name:"Python"
        },
    ]

  return (
    <>
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    <div>
    <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 my-5'>
     {
        cardItem.map(({id,logo,name})=>(
            <div key={id} className='md:w-[300px] md:h-[300] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                <div className='flex justify-center items-center'>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                </div>
                <div >
                    <div className='font-bold text-xl mb-2 flex justify-center items-center'>{name}</div>
                </div>
            </div>
        ))
     }

    </div>
    </div>
    
    </div>
    <hr />
    </>

  )
}

export default Experiance
