import { useLoaderData } from "react-router-dom"
import "../index.css"

function Projects(props){
    const projects = useLoaderData()
    return projects.map((project) => (
        <div className="projects">
            <h1>{project.name}</h1>
            <div className="projectimg"><img src={project.image} alt={project.name}/></div>
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
    ))
        
    
}
export default Projects