import React from "react";
import "./EatCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const Localities = ({ city }) => {
  return (
    <div className="locals">
      <div className="hot">
        <h2>{city.name} <FontAwesomeIcon
            icon={faCaretRight}
            style={{
              color: "black",
              height: "20px",
              "margin-left": "10%",
            }}
          /></h2>
        <h5>{city.number}</h5>
      </div>
    </div>
  );
};

export default Localities;
