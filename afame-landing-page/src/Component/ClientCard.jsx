export default function ClientCard(
    {
        src
    }
){
    return(
        <>
        <div className="client-card" style={{
            height:"100px",
            widht:"150px",
            margin:"5px"
        }}>
            <img src={src} alt="" style={{
                height:"80px",
                widht:"100px",
                padding:"9px",
                objectFit:"contain"
            }} />
        </div>
        </>
    )
}