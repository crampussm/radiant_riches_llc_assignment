import React from 'react';
import { ChevronDown, Trophy, Check } from 'lucide-react';
import Star from './Star';

function Item(props) { 
    var keyprop = 0;
  return (
    <div className='md:w-[70%] mb-14 mx-5 md:mx-0 pb-3' style={{boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px"}}>
        <div className="attributes absolute mt-[-15px]">
            {
                props.itemdetails.badgeRemarks && 
                <div className="count flex rounded-r-md bg-rrlaorange py-1 px-2 mb-5">
                    <Trophy color='#FFFFFF' className='size-4'/>
                    <span className='flex justify-center font-font1 text-white text-sm ml-2'>{props.itemdetails.badgeRemarks}</span>
                </div>
            }
            <div className="count rounded-full w-[27px] border-2">
                <span className='flex justify-center'>{props.count}</span>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className="picture h-full flex flex-col justify-center items-center p-5">
                <img className='w-[70%]' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
                <p className='font-font1 text-[10px] m-2'>{props.itemdetails.imageLabel}</p>
            </div>
            <div className="about h-full flex flex-col justify-center w-[65%]">
                <div className="name">
                    <span className='font-font1'><h4 className='font-font1 font-semibold inline'>{props.itemdetails.name}</h4>- {props.itemdetails.info}</span>
                </div>
                {
                    props.itemdetails.discount && <span className='discountshow font-font1 text-rrladarkblue bg-blue-50 w-fit text-[12px] p-1 rounded-sm font-semibold'>{props.itemdetails.discount} off</span>
                }
                <div className="description flex flex-col justify-center mt-3">
                    <h4 className='font-font1 font-semibold'>Main highlights</h4>
                    <span className='font-font1 flex justify-center my-3'>
                        {
                            props.itemdetails.description && 
                            <p className='w-[80%] '>
                                [What You Get]: {props.itemdetails.description}
                            </p>
                        }
                        {
                            props.itemdetails.listedHighlights && 
                            <span className='highlighted-points text-[12px] flex items-center bg-rrlared rounded-lg w-full md:w-[80%] justify-start font-font1'>
                                <span className='flex flex-col'>
                                    {
                                        props.itemdetails.listedHighlights.points.map((point)=>{
                                            return <span className="points mx-5 p-1 bg-blue-50 text-rrlablue1 font-font1 my-1">{point}</span>
                                        })
                                    }
                                </span>
                                <span className='flex flex-col'>
                                    {
                                        props.itemdetails.listedHighlights.keys.map((key)=>{
                                            return <span className="keys mx-1 font-font1 my-2">{key}</span>
                                        })
                                    }
                                </span>
                                
                            </span>
                        }
                        
                    </span>
                </div>
                {
                    props.itemdetails.whyweloveit &&
                    <div className="whywelove my-2">
                        <h2 className='font-font1'>Why we love it</h2>
                        <div className='flex'>
                            <div className='points flex flex-col'>
                                {
                                    props.itemdetails.whyweloveit.map((key)=>{
                                        return <span className='rounded-full bg-blue-100 p-[3px] flex items-center justify-center mr-2 my-1'><Check color='blue' className='size-3.5'/></span>
                                    })
                                }
                            </div>
                            <div className='keys flex flex-col'>
                                {
                                    props.itemdetails.whyweloveit.map((key)=>{
                                        return <p className='font-font1 my-1 text-sm'>{key}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
                <div className="showmore flex justify-start items-center">
                    <p className='font-font1 text-blue-400 text-[12px] hover:cursor-pointer hover:underline'>Show more</p>
                    <ChevronDown color='#60a5fa' className='size-4 hover:cursor-pointer'/>
                </div>
            </div>
            <div className="rating-and-action flex md:flex-col justify-between items-center md:h-[250px] w-full md:w-fit">
                <div className="rating flex flex-col items-center bg-rrlablue p-3 w-[80%] rounded-b-md mx-2">
                    <h2 className='font-font1 text-xl'>{props.itemdetails.rating}</h2>
                    <p className='font-font1 text-sm'>{props.itemdetails.remarks}</p>
                    <span className='flex'>
                        {
                            props.stars.map((count)=>{
                                keyprop += 1;
                                return <Star key={keyprop} count={count}/>
                            })
                        }
                    </span>
                </div>
                <div className="view bg-rrlablue1 flex justify-center px-16 py-2 rounded-md cursor-pointer mx-2">
                    <li className='font-font1 list-none text-white text-sm'>View</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item
