import { Fade } from "reactstrap";
import { useState } from "react";
import MyNavBar from "./MyNavBar";
import Footer from "./Footer";


export default function Main() {
    
    return <>
        <MyNavBar></MyNavBar>
        <div className="bio">        
            <img src="https://i.imgur.com/qdkYZOa.jpg" className="profilepic"></img>
            <h1>Hello, my name is Raman</h1>
            <h2>Pursuing Bachelor's degree in Computer Science @ RIT</h2>
            <h3>Minor in Software Engineering</h3>
            <h3>Skills: Java, Python, Object-Oriented Design, a bit of JavaScript</h3>
            <h4>Interests: Distributed Systems, Web Engineering</h4>
        </div>
        <Footer></Footer>
    </>
}