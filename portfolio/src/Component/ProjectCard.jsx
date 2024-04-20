import "../Style/ProjectCard.css"


export default function ProjectCard({
    src, name, desc, tech,github, deploy
}) {

    return (
        <>
            <div className="project-card">
                <img src={src} alt=""
                    width={"200px"}
                    height={"200px"}
                />
                <p className="project-name">{name}</p>
                <p className="project-desc">{desc}</p>
                <p className="project-desc">Tech Stack:<label><b>{tech}</b></label></p>
                <div className="links">
                    <p className="git">
                        <a href={github}>Github</a>
                    </p>
                    {
                        deploy ?
                            <p className="deploy">
                                <a href={deploy}>Visit it..!</a>
                            </p>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}