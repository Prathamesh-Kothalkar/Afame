import ProjectCard from "./ProjectCard";
import "../Style/project.css"
import { project } from "../projects";

export default function Project(){
    const myproject = project;
    return(
        <>
            <div className="project" id="Project">
                <h1 className="head">I've Done with</h1>
                <div className="project-layout">
                  {
                    myproject.map((project) => (
                      <ProjectCard
                          key={project.id}
                          src={project.img_src}
                          name={project.name}
                          desc={project.desc}
                          tech={project.tech}
                          github={project.github}
                          deploy={project.deploy}
                      />
                  ))
                  }
                    
                </div>
                <button onClick={()=>{window.location.href="https://github.com/prathamesh-kothalkar"}} style={{margin:"15px"}}>See More on GitHub</button>
            </div>
        </>
    )
}