import React from 'react'
import pic5 from "../../public/android.png"
import pic3 from "../../public/ml.png"
import pic4 from "../../public/rect.jpg"

function Project() {
    const cardItem=[
        {
            id:1,
            logo:pic5,
            name:"Android+ML",
            text:"Chronic Kidney Disease (CKD) Prediction App",
            url:"https://github.com/harsh8956/OIBSIP"
            
        },
        {
            id:2,
            logo:pic5,
            name:"Android+ML",
            text:"Multiple Disease Prediction App (Heart Disease && CKD). ",
            url:"https://github.com/harsh8956/OIBSIP"
        },
        {
            id:3,
            logo:pic3,
            name:"Machine Learning",
            text:"Iris Flower Prediction, Car Price Prediction & Sales Prediction....",
            url:"https://github.com/harsh8956/OIBSIP"
        },
        {
            id:4,
            logo:pic4,
            name:"React",
            text:"Portfolio, Password Generator, Currency Convertor....",
            url:"https://github.com/harsh8956/OIBSIP"
        },
    ]

  return (
    <>
    <div name="Project" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    <div>
    <h1 className='text-3xl font-bold mb-5'>Projects</h1>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
     {
        cardItem.map(({id,logo,name,text,url})=>(
            <div key={id} className='md:w-[300px] md:h-[300] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                <div className='flex justify-center items-center'>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                </div>
                <div >
                    <div className='font-bold text-xl mb-2 flex justify-center items-center'>{name}</div>
                    <p className='px-2 text-gray-800 text-justify'>{text}</p>
                </div>
                <div className='flex justify-center items-center py-4'>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded' onClick={()=>window.open(url,"_blank")}>Code</button>
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

export default Project
