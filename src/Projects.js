import { Row } from "reactstrap";
import MyNavBar from "./MyNavBar";
import ProjectCard from "./ProjectCard";

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
            ProjectLink={"https://github.com/rzv09/bike_share"}
            Text={"Packet sniffing tool for analyzing TCP, UDP, ICMP packets"}
            ImgSrc={"https://i.imgur.com/fKZ1fPG.png"}
            ></ProjectCard>
        </Row>

        </div>

    </>
}