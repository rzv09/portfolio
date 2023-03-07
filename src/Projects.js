import { Row } from "reactstrap";
import MyNavBar from "./MyNavBar";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
export default function Projects() {
    
    return <>
        <MyNavBar></MyNavBar>
        <div className="projects"> 
        <Row>
            <ProjectCard Title={"bikeshare"} SubTitle={"Flask, SQLite, Bootstrap"} 
            ProjectLink={"https://github.com/rzv09/bike_share"} 
            ImgSrc={"https://imgur.com/PBU58MW.png"}
            Text={"Fullstack webabpp which allows college grads to donate their bikes"} 
            >   
            </ProjectCard>
            <ProjectCard Title={"Packet Analyzer"} SubTitle={"Java"} 
            ProjectLink={"https://github.com/rzv09/pktanalyzer"}
            Text={"Packet sniffing tool for analyzing TCP, UDP, ICMP packets"}
            ImgSrc={"https://i.imgur.com/fKZ1fPG.png"}
            ></ProjectCard>
            <ProjectCard Title={"Custom Language Compiler"} SubTitle={"Java"} 
            ProjectLink={"https://github.com/rzv09/customeLang/tree/master/jottTranslator-main"}
            Text={"A compiler for a custom programming language"}
            ImgSrc={"https://i.imgur.com/cUo4ZfX.png"}
            ></ProjectCard>
            <ProjectCard Title={"This website"} SubTitle={"React"} 
            ProjectLink={"https://github.com/rzv09/portfolio"}
            Text={"Please don't judge the UI. I'm definitely not an expert in front-end"}
            ImgSrc={"https://i.imgur.com/3dqWQmp.png"}
            ></ProjectCard>
        </Row>

        </div>
        <Footer/>

    </>
}