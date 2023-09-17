import { Radio } from '@mui/material';
import React from 'react';
import "./EatCard.css"
const GetApp = () => {
  return (
	<div className='flash'>
	  <div className='in'>
<div className='child1'>
<div className='inchild'>
<img src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png' alt='image not aailable'></img>
</div>
</div>
<div className='child2'>
<div className='inchild2'>
<div className='get'><h1>Get the Zomato app </h1>
<span>We will send you a link , open it on your phone and download the app</span></div>

<div className='inputs'>
<div className='sec'>
<section>
<label className='selection'>
<input type="radio"></input>
<span>Email</span>
</label>
</section>

</div>
<div className='sec'>
<section>
<label className='selection'>
<input type="radio"></input>
<span>	Phone</span>
</label>
</section>

</div>
</div>
<div className='space'>
<input type="text" placeholder='Enter your Email'></input>
<button>Share app link</button>
</div>
<div className='para'><p>Download the app from</p></div>
<div className='logs'>
<div className='i1'><img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'></img></div>
<div className='i2'><img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'></img></div>
</div>
</div>
</div>
</div>
	</div>
  );
}
 
export default GetApp;
