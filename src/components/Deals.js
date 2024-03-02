import React, { useEffect, useState } from 'react'
import Card from './Card'

function Deals() {
    var count = 0;
    const [deals, setDeals] = useState([]);
    const loadDeals = async()=>{
        const response = await fetch('./deals.json', {
            headers:{
                "Content-Type": "application/json",
            }
        });
        let json = await response.json();
        setDeals(json.deals);
    }
    useEffect(()=>{
        loadDeals();
    }, [])
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <div className="heading w-[65%] flex justify-start mb-5">
            <h1 className='font-font1 text-2xl'>Related deals you might like for</h1>
        </div>
        <div className="deals flex md:flex-row flex-col">
            {
                deals.map((deal)=>{
                    count +=1;
                    return <Card key={count} deal={deal}/>
                })
            }
        </div>
    </div>
  )
}

export default Deals