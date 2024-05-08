import "../Style/contact.css"
export default function Contact() {
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
                                    <a href="mailto:pkothalkar9021@gmail.com">prathameshkothalkar9021@gmail.com</a>
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
                        <from action="https://api.web3forms.com/submit"  method="POST">
                        <input type="hidden" name="access_key" value="f0252f5f-c09d-431e-a3ec-d1f7181de97f"></input>
                            <input type="text" name="name" placeholder="Enter Name" />
                            <br />
                            <input type="email" name="email" placeholder="Email Address" />
                            <br />
                            <input type="text" name="subject" placeholder="Subject" />
                            <br />
                            <textarea name="query" type="textarea" placeholder="Tell me about your Project" />
                            <br />
                           
                            <input type="hidden" name="redirect" value="https://web3forms.com/success?title=My%20Text&desc=Custom%20Description" />
                            <div class="h-captcha" data-captcha="true"></div>
                            <button type="submit" value={"Submit"}>Submit</button>
                        </from>
                    </div>
                </div>
            </div>
        </>
    )
}