import MyNavBar from "./MyNavBar";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    
    return <>
        <MyNavBar></MyNavBar>
        <div className="projects"> 
            <ProjectCard Title={"bikeshare"} SubTitle={"Flask, SQLite, Bootstrap"} ProjectLink={"https://github.com/rzv09/bike_share"}></ProjectCard>
        </div>

    </>
}