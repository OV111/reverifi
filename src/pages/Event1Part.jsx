import React, { useState } from 'react'
import EventCard from '../components/EventCard';
const Event1 = () => {
    const [state,setState] = useState("false");
    
  return (
    <React.Fragment>
      <div>
        <h1 className="text-center text-4xl  pb-6 text-[#222222] font-semibold">
          Events
        </h1>

        
        <div>
          <ul className='flex justify-center items-center gap-18 cursor-pointer'>
            <li className='hover:text-[#B2D235]'>All</li>
            <li className='hover:text-[#B2D235]'>Upcoming</li>
            <li className='hover:text-[#B2D235]'>Past</li>
          </ul>
        </div>
        <EventCard/>
      </div>
    </React.Fragment>
  );
};
export default Event1;
