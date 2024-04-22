import "../Style/footer.css"
export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="logo">
                    <img src="https://afame.in/wp-content/uploads/2023/07/cropped-cropped-logo--439x439.png" height={"50px"} width={"100px"} alt="" />
                </div>
                <div className="links">
                   <ul className="footer-items">
                    <li>Company</li>
                     <li>Home</li>
                     <li>About</li>
                     <li>Client</li>
                   </ul>
                </div>
                <div >
                    <ul className="footer-items">
                     <li>Company</li>
                        <li>Mobile</li>
                        <li>email</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer-items">
                        <li>Company</li>
                        <li>Address 1</li>
                        <li>Address 2</li>
                    </ul>   
                </div>
            </div>
        </>
    )
}