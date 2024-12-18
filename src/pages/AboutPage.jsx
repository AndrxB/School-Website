import React, { useState } from "react";
import Title from "../hooks/Title"
import profilePic from "../assets/book_worm.jpg";
import AboutSections from "../hooks/AboutSections";


export default function AboutPage(){

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    return(<>
        <Title />
        
        <div className="about-outer-container">
            <div className="about-inner-container">
                <div className="about-picture-wrapper">
                    <img src={profilePic} height="200" className="about-picture"/>
                </div>
                
                <div className="contact-info">
                    <h2>Allan Steen Birk</h2>
                    <em>+45 9390 8825</em>
                    <em>forstaa-alt@mail.com</em>
                </div>
                
            </div>    
            <AboutSections />  
        </div>    
    </>)

}