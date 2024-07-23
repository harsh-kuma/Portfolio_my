import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaLinkedin size={25}/>
                    <FaTwitter size={25}/>
                    <FaGithub size={25}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p>&copy; 2024. All rights reserved.</p>
                </div>

            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
