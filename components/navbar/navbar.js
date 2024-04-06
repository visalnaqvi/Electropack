import Image from "next/image"
import logo from "../../public/logo.png"
import styles from "./navBar.module.css"
import { GiHamburgerMenu , GiCancel } from "react-icons/gi"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useWindowSize } from "@uidotdev/usehooks";
const NavBar = () => {

    const router = useRouter()
    const [isVisible , setIsVisible] = useState(true);
    const size = useWindowSize();

    useEffect(()=>{
        setIsVisible(size.width>=1040)
    },[size])
    return (
        <div>
            <div className={`${styles.navBar} body-wrapper justify-between`} style={{ flexWrap: "nowrap" }}>
            <div onClick={()=>{
                setIsVisible(!isVisible)
            }} className={styles.hamMenu}>
            {isVisible ? <GiCancel style={{pointerEvents:"none"}} /> :<GiHamburgerMenu style={{pointerEvents:"none"}} />}
            </div>
                <Image src={logo} width={180} height={60} alt="al azeem logo" />
               <div className={`${styles.mainMenu} ${!isVisible && styles.notVisible}`}>
                    <ul className="body-wrapper">
                    <li onClick={()=>{router.push("/")}}>Home</li>
                    <li onClick={()=>{router.push("/contactus")}}>Contact Us</li>
                    <li onClick={()=>{router.push("/aboutUs")}}>About Us</li>
                    <li onClick={()=>{router.push("/interiorProjects")}}>Interior Project</li>
                    <li onClick={()=>{router.push("/exteriorProjects")}}>Exterior Project</li>
                    </ul>
                </div>
                <div className={`${styles.w20} body-wrapper`}>
                    
                   
                <button onClick={()=>{router.push("/login")}} className="primary-btn blue" style={{ marginTop: "0" }}>Request A Callback</button>

                   
                </div>
            </div>
    
        </div>
    )
}

export default NavBar