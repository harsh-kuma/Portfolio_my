import React from 'react'

function Contact() {
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-6'>
        <h1 className='text-3xl font-bold mb-4'>
            Contact Me
        </h1>
        <div className='flex flex-col justify-center items-center mt-5'>
            <form action="https://getform.io/f/awngyrqb"
            method="POST"
            className='bg-slate-300 w-96 px-8 py-6 rounded-xl'>
            <h1 className=' text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text"
                  id="name"
                  name="name"
                  placeholder='Name'
                 />
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Id</label>
                <input className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email"
                  id="name"
                  name="email"
                  placeholder='Enter email id'
                 />
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Massage</label>
                <textarea className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email"
                  id="name"
                  name="massage"
                  placeholder='Enter message'
                 />
            </div>
            <div className='flex justify-center items-center'>
            <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </div>
           </form>
        </div>

    </div>
    </>
  )
}

export default Contact
