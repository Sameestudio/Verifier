import React from 'react';
import "./Footer/Footer.css";
import { FaFacebookSquare, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
        </div>
        <ul style={{marginBottom: "2px"}} class="social-icons">
            <li><a href="#/"><FaFacebookSquare /></a></li>
            <li><a href="#/"><FaTwitter /></a></li>
            <li><a href="#/"><FaLinkedinIn /></a></li>
            <li><a href="#/"><BsInstagram /></a></li>
        </ul>
        <ul style={{marginBottom: "1px"}} class="menu">
            <li><a href="#/">Home</a></li>
            <li><Link to="./about">About</Link></li>
            <li><a href="#/">Services</a></li>
            <li><Link to="./team">Team</Link></li>
            <li><a href="#/">Contact</a></li>
        </ul>
        <p>©2022 <a href='https://www.facebook.com/SameeStudio6' style={{textDecoration:'none', color: "white"}}>Samee Studio</a> | All Rights Reserved</p>
    </footer>
  )
}

export default Footer