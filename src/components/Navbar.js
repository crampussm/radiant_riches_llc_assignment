import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);
    const showMenu = () => {
        if(isMenu===true){
            setIsMenu(false);
        }else{
            setIsMenu(true);
        }
    }
  return (
    <div className='w-full'>
        <div className="navbar bg-rrlablack flex justify-between md:justify-center w-full h-14 items-center" >
            <div className="hamberger ml-2 md:hidden" >
                <Menu color='white' className='cursor-pointer' onClick={showMenu}/>
            </div>
            <div className="searchbar mr-6 md:w-1/2 lg:w-1/4 flex justify-end md:mr-20 items-center">
                <Search className='relative left-[27px] p-[2px] '/>
                <input type="text" className=' rounded-md w-[65%] h-[30px] font-font1 pl-8'/>    
            </div>
            <div className="navoptions hidden w-1/2 lg:w-1/4 md:mr-10 md:block">
                <ul className='flex text-rrlawhite justify-between font-font1'>
                    <li className='font-font1 cursor-pointer'>Categories</li>
                    <li className='font-font1 cursor-pointer'>Website Builders</li>
                    <li className='font-font1 cursor-pointer'>Today's deals</li>
                </ul>
            </div>
        </div>
        {
            isMenu && 
            <div className="menu md:hidden bg-rrlablack w-[60%] fixed left-0 top-0 h-[105vh] z-10">
            <span className='text-gray-400 text-2xl font-font1 w-full flex justify-end'>
                <p className='mt-5 mr-5 cursor-pointer' onClick={showMenu}>X</p>
            </span>
            <ul className='mt-20 flex flex-col text-rrlawhite justify-center items-center font-font1'>
                <li className='font-font1 cursor-pointer text-xl my-5 mx-5'>Categories</li>
                <li className='font-font1 cursor-pointer text-xl my-5 mx-5'>Website Builders</li>
                <li className='font-font1 cursor-pointer text-xl my-5 mx-5'>Today's deals</li>
            </ul>
        </div>
        }
    </div>
  )
}

export default Navbar