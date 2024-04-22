import "../Style/hero.css"
import { SocialIcon } from 'react-social-icons'
export default function Hero(){
    return (
        <>
            <div className="hero">
                <div className="left">
                    <p className="why">Why Choose us</p>
                    <p className="title">Get Instant Growth Results For Your Business.</p>
                   <p className="desc"> Now no need to worry about marketing and sales issues in your<br></br>business because we'll take your business in digital world.</p>
                    <div className="btn">
                        <a href="">Expolre services</a>
                        <a href="">Whatsapp Us</a>
                    </div>
                </div>
                <div className="right">
                    <img src="https://afame.in/wp-content/uploads/2023/08/software-development-4165307_1280-1024x853.jpg" 
                   alt="" />
                    <div className="icon">
                        <div className="ic-msg">
                            Follow us :
                        </div>
                        <div className="ic">
                        <SocialIcon className="ics" style={{height:"40px",width:"40px"}}  url="https://www.facebook.com/afametechnologies"/> 
                        <SocialIcon className="ics"  style={{height:"40px",width:"40px"}}  url="https://www.instagram.com/afametechnologies/"/>
                        <SocialIcon className="ics" style={{height:"40px",width:"40px"}}  url="https://twitter.com/afametech"/>
                        <SocialIcon className="ics" style={{height:"40px",width:"40px"}}   url="https://www.youtube.com/channel/UCGQIOC9nLV9H1yaS029hzmg"/>
                        <SocialIcon className="ics"style={{height:"40px",width:"40px"}}   url="https://www.linkedin.com/company/afametechnologies/"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}