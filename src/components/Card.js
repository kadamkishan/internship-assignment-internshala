import { useState } from 'react';

function Card({id,image,coursedescription,name,removeTour,enrollmentStatus,duration,schedule,instructor,location}){
    
    const[readmore,setReadmore]=useState(false);

    const description= readmore ? coursedescription:
    `${coursedescription.substring(0,200)}...`;

   
    return (
        <div className='card'>
            <div className='enrol-stat'>{enrollmentStatus}</div>
            <img src={image} className='image' alt='img'></img>

            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>{name} </h4> 
                    <h3>{instructor}</h3>
                    <h1 className='tour-duration'>{duration} ({location})</h1>
                    <h1 className='tour-duration'></h1>
                </div>

                <div className='description'>
                    {description}
                    <span className='read-more' onClick={()=>setReadmore(!readmore)}>
                        {readmore ?`Show Less`:`Read More`}
                    </span>
                </div>
            </div>
            
            <button className='btn-red' onClick={()=> removeTour(id)}>Not Intreseted</button>
        </div>
    );
}

export default Card;