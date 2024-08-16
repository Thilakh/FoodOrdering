import React, { useState } from "react";
import "./Home.css";
import fblr from '../Assets/Bangalore.jpeg'
import foodlogo from "../Assets/FoodLogo.jpeg";
import fcalicut from "../Assets/Calicut.jpeg";
import fchennai from "../Assets/Chennai.jpeg";
import fhyderabad from "../Assets/Hyderabad.jpeg";
import fkochi from "../Assets/Cochin.jpeg";
import fkovai from "../Assets/Coimbatore.jpeg";
import fmumbai from "../Assets/Mumbai.jpeg";
import fdelhi from "../Assets/Delhi.jpeg";
import fparis from "../Assets/Paris.jpeg";
import fkashmir from "../Assets/Kashmir.jpeg";
import flondon from "../Assets/London.jpeg";
import flos from '../Assets/Los.jpg'
import { Link } from "react-router-dom";
import { Button, Box, Input, Modal, TextField } from "@mui/material";
import City from './City/City'
import Footer from './Footer/Footer'
const Home = () => {
  const [username, setUsername] = useState(null);
  const [address, setaddress] = useState({ town: '' });
  function getlocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setaddress(data.address));
      console.log(address);
    });
  }
  const handleInputChange = (e) => {
    setaddress({ town: e.target.value });
  };
  return (
    <>
        <div className="container">
      <p>It's the food that you love, Delivered</p>
      <div className="inputcover">
        <input
          type="text"
          className="input-box"
          placeholder="Locate or street number"
          value={address.town}
          onChange={handleInputChange}
        />
        <button className="find-button" onClick={getlocation}>
          Find
        </button>
      </div>
    </div>
        <div className="cities">
          <h2>Find us in these cities and many more</h2>
          <div className="grid-container">
            <Link to="/bangalore/restaurants">
            <div class="grid-item">
              <img src={fblr} alt="cityimage" />
              <div id="tag">Bangalore</div>
            </div>
            </Link>
            <Link to="/coimbatore/restaurants">
            <div class="grid-item">
              <img src={fkovai} alt="cityimage"></img>
              <div id="tag">Coimbatore</div>
            </div>
            </Link>
            <Link to="/calicut/restaurants">
            <div class="grid-item">
              <img src={fcalicut} alt="cityimage"></img>
              <div id="tag">Calicut</div>
            </div>
            </Link>
            <Link to="/chennai/restaurants">
            <div class="grid-item">
              <img src={fchennai} alt="cityimage"></img>
              <div id="tag">Chennai</div>
            </div>
            </Link>
            <div class="grid-item">
              <img src={fhyderabad} alt="cityimage"></img>
              <div id="tag">Hyderabad</div>
            </div>
            <div class="grid-item">
              <img src={fkochi} alt="cityimage"></img>
              <div id="tag">Kochi</div>
            </div>
            <div class="grid-item">
              <img src={fmumbai} alt="cityimage"></img>
              <div id="tag">Mumbai</div>
            </div>
            <div class="grid-item">
              <img src={fdelhi} alt="cityimage"></img>
              <div id="tag">Delhi</div>
            </div>
            <div class="grid-item">
              <img src={fkashmir} alt="cityimage"></img>
              <div id="tag">Kashmir</div>
            </div>
            <div class="grid-item">
              <img src={fparis} alt="cityimage"></img>
              <div id="tag">Paris</div>
            </div>
            <div class="grid-item">
              <img src={flondon} alt="cityimage"></img>
              <div id="tag">London</div>
            </div>
            <div class="grid-item">
              <img src={flos} alt="cityimage"></img>
              <div id="tag">Los Angeles</div>
            </div>
          </div>
      
        </div>
      <City />
      <Footer />
    </>
  );
};

export default Home;