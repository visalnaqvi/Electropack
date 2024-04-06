import ContactCard from "../cards/contactcard/ContactCard.js";
import Gallary from "../gallary/gallary.js";
import Map from "../map/map.js";
import styles from "./exteriorProjects.module.css"

import img_2_1 from "../../public/gallary/interior/2/12.jpeg"
import img_2_2 from "../../public/gallary/interior/2/14.jpeg"
import img_2_3 from "../../public/gallary/interior/2/15.jpeg"
import img_2_4 from "../../public/gallary/interior/2/53.jpeg"

import img_7_1 from "../../public/gallary/interior/7/50.jpeg"
import img_7_2 from "../../public/gallary/interior/7/48.jpeg"
import img_7_3 from "../../public/gallary/interior/7/49.jpeg"
import img_7_4 from "../../public/gallary/interior/7/51.jpeg"
import img_7_5 from "../../public/gallary/interior/7/52.jpeg"
import img_7_6 from "../../public/gallary/interior/7/53.jpeg"

import img_8_1 from "../../public/gallary/interior/8/54.jpeg"
import img_8_2 from "../../public/gallary/interior/8/56.jpeg"
import img_8_3 from "../../public/gallary/interior/8/55.jpeg"

import img_9_1 from "../../public/gallary/construction/8.jpg"
import img_9_2 from "../../public/gallary/construction/9.jpg"
import img_9_3 from "../../public/gallary/construction/10.jpg"
import img_9_4 from "../../public/gallary/construction/11.jpg"
import img_9_5 from "../../public/gallary/construction/12.jpg"
import img_9_6 from "../../public/gallary/construction/13.jpg"
import img_9_7 from "../../public/gallary/construction/14.jpg"
import img_9_8 from "../../public/gallary/construction/15.jpg"
import img_9_9 from "../../public/gallary/construction/16.jpg"
import img_9_10 from "../../public/gallary/construction/17.jpg"
import img_9_11 from "../../public/gallary/construction/18.jpg"
import img_9_12 from "../../public/gallary/construction/22.jpg"
import img_9_13 from "../../public/gallary/construction/23.jpeg"
import img_9_14 from "../../public/gallary/construction/24.jpeg"
import img_9_15 from "../../public/gallary/construction/25.jpeg"
import img_9_16 from "../../public/gallary/construction/26.jpeg"

import Image from "next/image.js";
const ExteriorProjects = () => {
    const images_2 = [img_2_1 , img_2_2 , img_2_3 , img_2_4]
    const images_7 = [img_7_1 , img_7_2 , img_7_3 , img_7_4 , img_7_5 , img_7_6]
    const images_8 = [img_8_1 , img_8_2 , img_8_3 ]
    const images_9 = [img_9_1 , img_9_2 , img_9_3 , img_9_4 , img_9_5 , img_9_6 , img_9_7 , img_9_8 , img_9_9 , img_9_10 , img_9_11 , img_9_12 , img_9_13 , img_9_14 , img_9_15 , img_9_16]
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>Our Interior Projects</p>
                <p className={styles.text}>Explore our diverse portfolio of interior projects, each meticulously crafted to inspire and elevate your space with timeless design.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <div className="margin">
        <h2 className="subHeading">Electropack Engineers</h2>
        <p className="content">We provide full construction plus interior services. We will build your place up from ground we have perfect team for your build. We provide all materials with labor and installation. Contact us for more information.</p>
       
    
       <Gallary images={images_2} />
       <br></br>
       <Gallary images={images_7} />
       <br></br>
       <Gallary images={images_8} />
       <br></br>
       <Gallary images={images_9} />
       
        <h2 className="subHeading">Contact Electropack Engineers</h2>
        <p className="content">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>
       
       <br></br>
        <div className="body-wrapper">
        <button className="primary-btn blue">Request a callback</button>
        </div>
       <br></br>
       <br></br>
        <div className={`${styles.cardholder} flex-class wrap`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="1/53, Ist Floor,Lalita Park," line2="Laxmi Nagar, Delhi-92"></ContactCard>
            <ContactCard heading="Contact" line1="+919811042458" line2="+919811136987"></ContactCard>
        </div>
       
        <Map></Map>
        <br />
        <br />
        <br />
        </div>
    </> );
}
 
export default ExteriorProjects;