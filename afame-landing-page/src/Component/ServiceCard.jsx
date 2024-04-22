import "../Style/servicecard.css"
export default function ServiceCard({
    src,name,desc
}){
    return(
        <>
            <div className="card">
                {/* Photo at center */}
                <div className="photo">
                    <img src={src} alt="" />
                </div>
                <div className="name">
                    {name}
                </div>
                <div className="desc">
                    {desc}
                </div>
            </div>
        </>
    )
}