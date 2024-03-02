import React from 'react';
import { CheckCircle2, Info, ChevronDown, ChevronRight } from 'lucide-react';

function Top() {
  return (
    <div className='flex items-center flex-col'>
        <div className="heading md:w-[70%] flex justify-center mt-8 border-b-2 h-14">
            <h1 className='font-font1 text-2xl md:text-4xl'>Best Website builders in the US</h1>
        </div>
        <div className="update flex w-[90%] md:w-[70%] border-b-2 p-2 justify-between">
            <section className='flex flex-col md:flex-row'>
                <div className="lastupdated flex justify-center md:justify-between items-center">
                    <CheckCircle2 className='mx-2 size-3 md:size-4 cursor-pointer'/>
                    <span className='font-font1 text-[10px] md:text-sm'>Last Updated - February 22, 2020</span>
                </div>
                <div className="adv flex justify-center md:justify-between items-center ml-4">
                    <Info className='mx-2 size-3 md:size-4 cursor-pointer'/>
                    <span className='font-font1 text-[10px] md:text-sm'>Advertising Disclosure</span>
                </div>
            </section>
            <section className='flex'>
                <div className="toprelevent flex justify-center items-center">
                    <span className='font-font1 text-[10px] md:text-sm'>Top Relevant</span>
                    <ChevronDown className='mx-2 size-4 cursor-pointer'/>
                </div>
            </section>
        </div>
        <div className="option flex w-full md:w-[80%] justify-start mt-4">
            <ul className='flex w-full md:w-[80%] justify-between md:justify-evenly mx-3 md:mx-0'>
                <li className='rounded-sm bg-white text-sm cursor-pointer text-[9px] md:text-sm'>Tools</li>
                <li className='rounded-sm bg-white text-sm cursor-pointer text-[9px] md:text-sm'>AWS Builder</li>
                <li className='rounded-sm bg-white text-sm cursor-pointer text-[9px] md:text-sm'>Start Build</li>
                <li className='rounded-sm bg-white text-sm cursor-pointer text-[9px] md:text-sm'>Build Supplies</li>
                <li className='rounded-sm bg-white text-sm cursor-pointer text-[9px] md:text-sm'>Tooling</li>
                <li className='rounded-sm bg-white text-sm cursor-pointer text-[9px] md:text-sm'>BlueHosting</li>
            </ul>
        </div>
        <div className="path flex ml-6 md:ml-0 w-full md:w-[70%] justify-start mt-6">
            <div className="pathitem flex items-center">
                <span className='text-[10px] md:text-sm cursor-pointer'>Home</span>
                <ChevronRight className='mx-2 size-4'/>
            </div>
            <div className="pathitem flex items-center">
                <span className='text-[10px] md:text-sm cursor-pointer'>Hosting for all</span>
                <ChevronRight className='mx-2 size-4'/>
            </div>
            <div className="pathitem flex items-center">
                <span className='text-[10px] md:text-sm cursor-pointer'>Hosting</span>
                <ChevronRight className='mx-2 size-4'/>
            </div>
            <div className="pathitem flex items-center">
                <span className='text-[10px] md:text-sm cursor-pointer'>Hosting6</span>
                <ChevronRight className='mx-2 size-4'/>
            </div>
            <div className="pathitem flex items-center">
                <span className='text-[10px] md:text-sm cursor-pointer'>Hosting5</span>
                <ChevronRight className='mx-2 size-4'/>
            </div>
        </div>
    </div>
  )
}

export default Top