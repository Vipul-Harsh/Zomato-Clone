import React from 'react';
import data from "./PlaceData"
import Cards from './Cards';
//import "./Main.css"
import "./EatCard.css"
const PlaceCard = () => {
  return (
<>
<div className='collect'>
<h3>Collections</h3>
<div className='dot'>
<h6>Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends</h6>
<a href='#'>All collections in jaipur</a>
</div>
</div>
 <div className='fit'>
	  <div className='pl'>
	  {data.map(place=> (
        <Cards key={place.id} place={place} />
      ))}
	</div>
	</div>
</>
  );

}

export default PlaceCard;
