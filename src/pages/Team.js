import React from 'react'
import './Team.css';
import { FaFacebookSquare, FaTwitter} from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import Team1 from './profile-pic.png';
import Team2 from './manahil.png';
import Team3 from './mueed.png';

function Team() {
  return (
    <div class="body">
        <div class="containers">
        <h4 className='title'>Our Team</h4>
        <div class="cards">
            <div class="content">
                <div class="imgBx">
                    <img src={Team1} alt="" style={{height: "120%"}}/>
                </div>
                <div class="contentBx">
                    <h4>Abdul Samee</h4>
                    <h5>Group Leader</h5>
                </div>
                <div class="sci">
                    <a href="#/"><FaFacebookSquare /></a>
                    <a href="#/"><BsInstagram /></a>
                    <a href="#/"><FaTwitter /></a>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="content">
                <div class="imgBx">
                <img src={Team2} style={{height: "110%"}} alt=""/>
                </div>
                <div class="contentBx">
                    <h4>Manahil Shaikh</h4>
                    <h5>Asst:GL</h5>
                </div>
                <div class="sci">
                    <a href="#/"><FaFacebookSquare /></a>
                    <a href="#/"><BsInstagram /></a>
                    <a href="#/"><FaTwitter /></a>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="content">
                <div class="imgBx">
                    <img src={Team3} style={{height: "120%"}} alt=""/>
                </div>
                <div class="contentBx">
                    <h4>Abdul Mueed</h4>
                    <h5>Member</h5>
                </div>
                <div class="sci">
                    <a href="#/"><FaFacebookSquare /></a>
                    <a href="#/"><BsInstagram /></a>
                    <a href="#/"><FaTwitter /></a>
                </div>
            </div>
        </div>
        <h4 className='titleE'>Supervised By: Dr. Abdul Wahid Memon</h4>

    </div>
    </div>
  )
}

export default Team