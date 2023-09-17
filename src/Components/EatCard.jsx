import React from 'react';
import imgdata from './ImgData';
import DineCard from './DineCard'
import "./EatCard.css"
const EatCard = () => {
  return (
	<div className='eatcard'>
	  {imgdata.map(food=> (
        <DineCard key={food.id} food={food} />
      ))}
	</div>
  );
}

export default EatCard;
