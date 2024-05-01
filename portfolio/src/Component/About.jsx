import "../Style/about.css"
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';
import resume from '../assets/prathResume.pdf'
export default function About() {
    const res=resume;
    return (
        <>
            About me
            <div className="about" id="About" >
                <div className="photo">
                    <img src="https://i.ibb.co/QksNKnW/prathamesh.jpg" alt="" />
                </div>
                <div className="info">
                    <div className="heading">
                        <TypeAnimation
                            sequence={[
                                "Hey, I'm a Prathamesh",
                                1000,
                                "Hey, I'm a Student",
                                1000,
                                "Hey, I'm a MERN Stack Dev",
                                1000,
                                "Hey, I'm a Java Dev",
                                1000
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="desc">
                        <p>
                            As a third-year diploma student with a passion for full-stack development, I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack. Eager to contribute my skills and learn from experienced professionals in the industry. Open to exciting opportunities and collaborations in web development projects.
                        </p>
                        <div>
                            <SocialIcon style={{margin:"6px"}} url="https://www.linkedin.com/in/prathamesh-kothalkar-0b0949243/" />
                            <SocialIcon  style={{margin:"6px"}} url="https://github.com/prathamesh-kothalkar" />
                            <SocialIcon  style={{margin:"6px"}} url="https://instagram.com/kothalkar_prathamesh_07" />
                        </div>
                        <div className="cv">
                            <a className="btn" href={res} download>Get a Resume</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}