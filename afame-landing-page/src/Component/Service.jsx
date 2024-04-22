import "../Style/service.css"
import ServiceCard from "./ServiceCard";

export default function Service(){
    return(
        <>
            <div id="Service">
                <h1><b>Our Services..!</b></h1>
            </div>
           <div className="cards">
           <ServiceCard
            src="https://cdn1.iconfinder.com/data/icons/business-startup-14/60/Development-64.png"
            name="Web Development"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque odio veniam eveniet illum cumque nam, aperiam error modi animi?"
            />
             <ServiceCard
            src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/stack-64.png"
            name="Social Media Management"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque odio veniam eveniet illum cumque nam, aperiam error modi animi?"
            />
             <ServiceCard
            src="https://cdn1.iconfinder.com/data/icons/social-media-marketing/64/keyword-search-engine-optimization-research-marketing-64.png"
            name="Digital Marketing"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque odio veniam eveniet illum cumque nam, aperiam error modi animi?"
            />
             <ServiceCard
            src="https://cdn1.iconfinder.com/data/icons/creative-process-19/100/creative_process_strategy-64.png"
            name="Marketing Strategy Consultation"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque odio veniam eveniet illum cumque nam, aperiam error modi animi?"
            />
           </div>
        </>
    )
}
