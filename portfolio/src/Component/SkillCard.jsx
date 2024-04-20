import "../Style/skillcard.css"
import ProgressBar from "@ramonak/react-progress-bar";
export default function SkillCard({
    imgsrc,skill,per
}){
    return(
        <>
            <div className="skill-card">
               <img src={imgsrc} alt="" 
               width={"100px"} 
               height={"100px"}
              />
               <p className="skill-name">{skill}</p>
               <ProgressBar 
               completed={per}
               customLabel=" "
               baseBgColor="#fff"
               borderRadius="2"
               height="10px"
               bgColor="#D81313"/>
            </div>
        </>
    )
}