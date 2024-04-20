import "../Style/navbar.css"
export default function Navbar(){
    return(
        <>
            <div className="nav">
               <div className="name">
                 Prathamesh Kothalkar
               </div>
               <div className="menu">
                    <ul>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skill">Skill</a> </li>
                        <li><a href="#Project">Project</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
               </div>
            </div>
        </>
    )
}