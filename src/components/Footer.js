import React from 'react';
import { ChevronDown } from 'lucide-react';

function Footer() {
  return (
    <div className='w-full bg-rrlafooterbg p-5 flex justify-center'>
        <div className='flex flex-col md:flex-row w-[50%] justify-between mt-5 mb-10'>
            <div className="categories flex flex-col text-white my-5 md:my-0">
                <h3 className='font-font1 text-[13px] my-2'>CATERGORIES</h3>
                <li className='list-none text-[10px] text-rrlawhite'>Web Builder</li>
                <li className='list-none text-[10px] text-rrlawhite'>Hosting</li>
                <li className='list-none text-[10px] text-rrlawhite'>Data Center</li>
                <li className='list-none text-[10px] text-rrlawhite'>Robotic-Automation</li>
            </div>
            <div className="contact flex flex-col text-white my-5 md:my-0">
                <h3 className='font-font1 text-[13px] my-2'>CONTACT</h3>
                <li className='list-none text-[10px] text-rrlawhite'>Contact</li>
                <li className='list-none text-[10px] text-rrlawhite'>Privacy Policy</li>
                <li className='list-none text-[10px] text-rrlawhite'>Terms Of Service</li>
                <li className='list-none text-[10px] text-rrlawhite'>Categories</li>
                <li className='list-none text-[10px] text-rrlawhite'>About</li>
            </div>
            <div className="us flex text-white items-center my-5 md:my-0">
                <p className='text-[10px]'>United States</p>
                <ChevronDown className='size-4'/>
            </div>
        </div>
    </div>
  )
}

export default Footer