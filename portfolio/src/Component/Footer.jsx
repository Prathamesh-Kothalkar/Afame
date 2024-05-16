import "../Style/footer.css"
import { SocialIcon } from 'react-social-icons'
export default function Footer(){
    return(
        <>
            <div className="Footer">
                <div className="cpyright">
                ©2024 Prathamesh Kothalkar <br />
                All right reserved.
                </div>
                <div className="links">
                   
                    <ul>
                        <li><b>Social Links: </b></li>
                        <SocialIcon style={{margin:"6px"}} url="https://www.linkedin.com/in/prathamesh-kothalkar-0b0949243/" />
                            <SocialIcon  style={{margin:"6px"}} url="https://github.com/prathamesh-kothalkar" />
                            <SocialIcon  style={{margin:"6px"}} url="https://instagram.com/dev.prathamesh_" />
                    </ul>
                </div>
            </div>
        </>
    )
}