import { BsFillMegaphoneFill, BsFillPhoneFill, BsPhone } from "react-icons/bs"
import styles from "./videoHero.module.css"
import { FaPhoneAlt } from "react-icons/fa"

const VideoHero = ()=>{
    return (
        <div className={`${styles.wrapper} body-wrapper`}>
        <div className={styles.column}>
        <h2 className="subHeading" style={
            {marginTop:0}
        }>Discover Our Latest Work: Inspirational Spaces Crafted with Precision.</h2>
        <p className="content">Immerse yourself in our portfolio of recent projects, showcasing our dedication to excellence in construction and interior design. From elegant homes to dynamic office spaces, each project reflects our commitment to creativity, quality, and client satisfaction.</p>
        <a href="tel:9911390398"><div className={`body-wrapper justify-start ${styles.phoneWrapper}`}>
            <div className={`${styles.icon}`}>
                <FaPhoneAlt />
            </div>
            <p className={styles.phone}>Connect with us Now</p>
        </div></a>
        <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/interiorProjects")}} style={{marginRight:"10px"}}>Explore Interior Projects</button>
            <button className="primary-btn blue" onClick={()=>{router.push("/exteriorProjects")}}>Explore Exterior Projects</button>
            </div>
        </div>
        <div className={styles.column}>
      <video style={{margin:"auto"}} autoPlay muted width={280} height={400} loop >
          <source src="../gallary/hero.mp4" type="video/mp4"/>
      </video>
      <video style={{margin:"auto"}} autoPlay muted width={280} height={350} loop >
          <source src="../gallary/hero2.mp4" type="video/mp4"/>
      </video>
      </div>
      </div>
    )
}

export default VideoHero;