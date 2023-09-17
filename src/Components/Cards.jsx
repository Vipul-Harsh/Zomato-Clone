import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./EatCard.css";
const Cards = ({ place }) => {
  return (
    <div className="collectioncard">
      <div className="collectionimg">
        <img src={place.imgsrc}></img>
        <h4>{place.title}</h4>
        <p>{place.desc}<FontAwesomeIcon icon={faCaretRight} style={{"color":"white","height":"20px","margin-left":"10px"}}/></p>
      </div>
    </div>
  );
};

export default Cards;
