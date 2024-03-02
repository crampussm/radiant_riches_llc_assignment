import React from 'react'

function Signup() {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <div className="signup flex flex-col md:flex-row w-[90%] md:w-[60%] justify-between">
            <div className='font-font1 text-3xl md:w-[40%] text-gray-500'>
                Sign up and get exclusive special deals
            </div>
            <div className='font-font1 flex md:max-h-[40px] h-[40px] mt-7 md:mt-0'>
                <input type="text" className='rounded-l-lg bg-white'/>
                <button className='bg-rrlablue1 text-white w-full px-3 py-2 text-[10px] rounded-r-lg'>Sign Up</button>            
            </div>
        </div>
    </div>
  )
}

export default Signup