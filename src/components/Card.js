import React from 'react'

function Card(props) {
    return (
        <div className="card flex flex-col p-2 m-1 rounded-md">
            <div className='w-full flex justify-center'>
                <img className='w-[70%]' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
            </div>
            <span className='offer flex justify-start my-3'>
                <span className='discount bg-rrlawhite rounded-md mx-1 text-[10px] p-1 text-rrladarkblue font-semibold'>
                    {props.deal.discount}% Off
                </span>
                <span className='offerlimit bg-rrlawhite rounded-md text-[10px] p-1 text-rrladarkblue font-semibold'>
                {props.deal.offerLimit}
                </span>
            </span>
            <div className="name flex justify-center my-2">
                <p className='font-font1 text-[14px] font-semibold'>{props.deal.name}</p>
            </div>
            <div className="description w-[90%]">
                <p className='font-font1 text-[14px] text-rrlagray'>{props.deal.description}</p>
            </div>
            <div className='w-[60%] flex items-baseline justify-between my-1'>
                <span className='font-font1'>
                    ${(props.deal.price - (props.deal.price*(props.deal.discount/100))).toFixed(2)}
                </span>
                <span className='text-[12px] text-gray-500 font-font1'>
                    ${props.deal.price}
                </span>
                <span className='text-[12px] text-red-500 font-font1'>
                    ({props.deal.discount}% Off)
                </span>
            </div>
            <span className='flex justify-center items-center rounded-lg bg-rrlablue1 text-white font-font1 w-full h-[40px] my-3 text-sm cursor-pointer'>View Deal</span>
        </div>
    )
}

export default Card