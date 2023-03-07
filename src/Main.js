import MyNavBar from "./MyNavBar";
import Footer from "./Footer";


export default function Main() {
    
    return <>
        <MyNavBar></MyNavBar>
        <div className="bio">        
            <img src="https://i.imgur.com/qdkYZOa.jpg" alt="me with a camera" className="profilepic"></img>
            <h1>Hello, my name is Raman</h1>
            <h2>Pursuing Bachelor's degree in Computer Science @ RIT</h2>
            <h3>Minor in Software Engineering</h3>
            <h3>Skills: Java, Python, Object-Oriented Design, a bit of JavaScript</h3>
            <h4>Interests: Distributed Systems, Web Engineering, Fullstack/Back-end Development</h4>
            <p>Relevant coursework: Web Engineering, Engineering of Software Subsystems, Data Comms & Networks, 
                Programming Language Concepts, Concepts of Computer Systems, Concepts of Parallel and Distributed Systems</p>
        </div>
        <Footer></Footer>
    </>
}