import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faclose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const NavBarHome = () => {
  return (
    <div className="head">
      <nav>
        <span>Get the app</span>
        <input type="checkbox" id="check" />
        <label for="check" className="icons">
          <FontAwesomeIcon
            icon={faBars}
            style={{
              color: "white",
              height: "20px",
              "margin-left": "10px",
            }}
          />
          <FontAwesomeIcon
            icon={faClose}
            style={{
              color: "white",
              height: "20px",
              "margin-left": "10px",
            }}
          />
        </label>
        <div className="right">
          <span>Invester Relation</span>
          <span>Add restraunt</span>
          <span>Sign up</span>
          <span>Log in</span>
        </div>
      </nav>
      <div className="content">
        <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"></img>
        <h3>Discover the best food & drinks in jaipur</h3>
        <div className="input">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{
              color: "rgba(241, 48, 48, 0.719)",
              height: "20px",
              "margin-left": "10px",
            }}
          />
          <select name="" id="">
            <option value="jaipur">Jaipur</option>
            <option value="Delhi">Dlehi</option>
            <option value="amritsar">Amritsar</option>
            <option value="agra">Agra</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          <div className="line"></div>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "grey", height: "20px", "margin-right": "10px" }}
          />
          <input
            type="text"
            placeholder="Search for restraunt, cusine or dishes"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarHome;
