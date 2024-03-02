import React, { useEffect, useState } from 'react';
import Item from './Item';

function Items() {
    var count = 0;
    const [items, setItems] = useState([]);
    const loadItems = async()=>{
        const response = await fetch('./items.json', {
            headers:{
                "Content-Type": "application/json",
            }
        });
        let json = await response.json();
        setItems(json.items);
    }
    const generateStar = (star) =>{
        let stars = [];
        for(let i=1; i<=5; i++){
            if(star>=i){
                stars.push(1);
            }else{
                stars.push(star-i);
            }
        }
        console.log(stars);
        return stars;
    }
    useEffect(()=>{
        loadItems();
    }, [])
    
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
        {items.map((item)=>{
            count += 1;
            let stars = generateStar((item.rating)/2);
            return <Item key={count} itemdetails={item} count={count} stars={stars}/>
        })}
        
    </div>
  )
}

export default Items