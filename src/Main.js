import { Fade } from "reactstrap";
import { useState } from "react";
import MyNavBar from "./MyNavBar";


export default function Main() {
    
    return <>
        <MyNavBar></MyNavBar>
        <div className="bio">        
            <h1>Hello, my name is Raman</h1>
            <h2>Pursuing Bachelor's degree in Computer Science @ RIT</h2>
            <h3>Minor in Software Engineering</h3>
            <h3>Skills: Java, Python, a bit of JavaScript</h3>
            <body>I enjoy working on full stack applications and backend systems.</body>
        </div>

    </>
}