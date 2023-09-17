import React from 'react';
import citi from "./LocalData"
import Localities from './Localities';
import "./EatCard.css"
const LocalFront = () => {
  return (
	<div>
<div className='header'>
<h1>Popular localities in and around <span>Jaipur</span></h1>
</div>
	   <div className='cover'>
	  {citi.map(city=> (
        <Localities key={city.id} city={city} />
      ))}
	</div>
	</div>
  );
}

export default LocalFront;
