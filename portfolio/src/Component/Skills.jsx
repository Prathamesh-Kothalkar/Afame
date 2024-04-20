import "../Style/skill.css";
import { skills } from "../skills";
import SkillCard from "./SkillCard";

export default function Skills() {
    const myskills = skills;
    return (
        <>
            <div className="skills" id="Skill">
                <h1 className="head">My Tech-Stack</h1>
                <div className="skill-layout">
                    {myskills.map((e) => (
                        <SkillCard
                            key={e.id}
                            imgsrc={e.img_src}
                            skill={e.skill}
                            per={e.per}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
