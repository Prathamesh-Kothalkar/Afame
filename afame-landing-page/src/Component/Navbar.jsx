import { SocialIcon } from "react-social-icons"
import "../Style/navbar.css"
export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="https://afame.in/wp-content/uploads/2023/07/cropped-cropped-logo--439x439.png" height={"50px"} width={"100px"} alt="" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="social">
                   
                        <SocialIcon className="ics" style={{height:"30px",width:"30px"}} url="https://www.facebook.com/afametechnologies"/> 
                        <SocialIcon className="ics" style={{height:"30px",width:"30px"}}  url="https://www.instagram.com/afametechnologies/"/>
                        <SocialIcon className="ics" style={{height:"30px",width:"30px"}}   url="https://twitter.com/afametech"/>
                       
                    
                </div>
            </div>
        </>
    )
}