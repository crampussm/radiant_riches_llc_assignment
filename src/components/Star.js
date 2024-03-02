import React from 'react';
import { MdOutlineStarPurple500, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";

function Star(props) {
  return (
    <div className='star flex'>
        {
            props.count===1 && <MdOutlineStarPurple500 color='#FFB80F'/>
        }
        {
            (props.count>-1 && props.count<0) && <MdOutlineStarHalf color='#FFB80F'/>
        }
        {
            props.count <= -1 && <MdOutlineStarOutline color='#FFB80F'/>
        }
    </div>
  )
}

export default Star