import "../Style/contact.css"
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from "react";
export default function Contact() {

    const [result, setResult] = useState("");
    const onHCaptchaChange = (token) => {
        setValue("h-captcha-response", token);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f0252f5f-c09d-431e-a3ec-d1f7181de97f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        setResult("Sended");
        
       
    }
    return (
        <>
            <div className="Contact" id="Contact">
                <h1 className="head">Hire Me..!</h1>
                <div className="contacts">
                    <div className="right">
                        <div className="msg">
                            <p className="text">Let's Chat<br />
                                Tell Me About Your Project</p>
                            <p className="text2"> Let's Create something together 🤘</p>
                        </div>
                        <div className="contact-details">
                            <div className="mail">
                                <img src="https://t3.ftcdn.net/jpg/04/40/47/24/360_F_440472452_akYtD3QipsLo9IwGEintusNRPO09rAFH.jpg"
                                    width={"50px"} height={"50px"} alt="" />
                                <div className="body">
                                    <a href="mailto:pkothalkar9021@gmail.com">pkothalkar9021@gmail.com</a>
                                </div>
                            </div>
                            <div className="phone">
                                <img src="https://w7.pngwing.com/pngs/421/683/png-transparent-computer-icons-mobile-phones-telephone-email-home-business-phones-phone-icon-miscellaneous-angle-service-thumbnail.png"
                                    width={"40px"} height={"40px"} alt="" />
                                <div className="body">
                                    <a href="tel:+919021023183">+91 9021023183</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div className="left-title">Send me a message 🚀</div>
                        <form onSubmit={onSubmit}>
                            <input type="text" name="name" placeholder="Enter Name" required />
                            <input type="email" placeholder="Email Address" name="email" required />
                            <input type="text" name="subject" placeholder="Subject" required />
                            <textarea name="message" placeholder="Tell me about your Project" required></textarea>
                            <HCaptcha
                                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                reCaptchaCompat={false}
                                onVerify={onHCaptchaChange}  />
                            <button type="submit">Submit Form</button>

                        </form>
                        <span>{result}</span>
                    </div>
                </div>
            </div>
        </>
    )
}