import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

const StarRating = ( ) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    function handleClick(id){
        setRating(id)
        console.log(id);
    }

    function handleMouseHover(id) {
        setHover(id)
        console.log(id);
        
    }

    function handleMouseLeave(){
        setHover(rating)
        console.log(rating);
        
    }


    return (
        <div>
            {
                [...Array(5)].map((_,index) => {
                    index += 1
                    return <FaStar key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseHover(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    />
                    }
                ) 
            }
            
        </div>
    );
}

export default StarRating;
