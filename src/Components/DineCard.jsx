import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import "./Main.css"
import "./EatCard.css"
const DineCard = ({food}) => {
  return (
	<div className='box'>
	<Card style={{ width: '22rem' }}>
      <Card.Img className='ima' variant="top" src={food.imgsrc} />
      <Card.Body className='cardbody'>
        <Card.Title>{food.title}</Card.Title>
        <Card.Text>
         {food.desc}
        </Card.Text>
       
      </Card.Body>
    </Card>
	</div>
  );
}

export default DineCard;
