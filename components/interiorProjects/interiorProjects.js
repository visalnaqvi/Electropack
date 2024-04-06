import ContactCard from "../cards/contactcard/ContactCard.js";
import Gallary from "../gallary/gallary.js";
import Map from "../map/map.js";
import styles from "./interiorProjects.module.css"
import img_1_1 from "../../public/gallary/interior/1/1.jpg"
import img_1_2 from "../../public/gallary/interior/1/9.jpeg"
import img_1_3 from "../../public/gallary/interior/1/10.jpeg"

import img_2_1 from "../../public/gallary/interior/2/12.jpeg"
import img_2_2 from "../../public/gallary/interior/2/14.jpeg"
import img_2_3 from "../../public/gallary/interior/2/15.jpeg"
import img_2_4 from "../../public/gallary/interior/2/53.jpeg"

import img_3_1 from "../../public/gallary/interior/3/27.jpeg"
import img_3_2 from "../../public/gallary/interior/3/28.jpeg"
import img_3_3 from "../../public/gallary/interior/3/29.jpeg"
import img_3_4 from "../../public/gallary/interior/3/30.jpeg"
import img_3_5 from "../../public/gallary/interior/3/5.jpg"
import img_3_6 from "../../public/gallary/interior/3/31.jpeg"

import img_4_1 from "../../public/gallary/interior/4/42.jpeg"
import img_4_2 from "../../public/gallary/interior/4/43.jpeg"
import img_4_3 from "../../public/gallary/interior/4/44.jpeg"
import img_4_4 from "../../public/gallary/interior/4/45.jpeg"
import img_4_5 from "../../public/gallary/interior/4/47.jpeg"
import img_4_6 from "../../public/gallary/interior/4/46.jpeg"

import img_5_1 from "../../public/gallary/interior/5/31.jpeg"
import img_5_2 from "../../public/gallary/interior/5/32.jpeg"
import img_5_3 from "../../public/gallary/interior/5/33.jpeg"
import img_5_4 from "../../public/gallary/interior/5/34.jpeg"
import img_5_5 from "../../public/gallary/interior/5/35.jpeg"
import img_5_6 from "../../public/gallary/interior/5/37.jpeg"
import img_5_7 from "../../public/gallary/interior/5/38.jpeg"
import img_5_8 from "../../public/gallary/interior/5/39.jpeg"
import img_5_9 from "../../public/gallary/interior/5/40.jpeg"
import img_5_10 from "../../public/gallary/interior/5/41.jpeg"
import img_5_11 from "../../public/gallary/interior/5/42.jpeg"
import img_5_12 from "../../public/gallary/interior/5/36.jpeg"

import img_7_1 from "../../public/gallary/interior/7/50.jpeg"
import img_7_2 from "../../public/gallary/interior/7/48.jpeg"
import img_7_3 from "../../public/gallary/interior/7/49.jpeg"
import img_7_4 from "../../public/gallary/interior/7/51.jpeg"
import img_7_5 from "../../public/gallary/interior/7/52.jpeg"
import img_7_6 from "../../public/gallary/interior/7/53.jpeg"

import img_8_1 from "../../public/gallary/interior/8/54.jpeg"
import img_8_2 from "../../public/gallary/interior/8/56.jpeg"
import img_8_3 from "../../public/gallary/interior/8/55.jpeg"

import Image from "next/image.js";
const InteriorProjects = () => {
    const images_1 = [img_1_1 , img_1_2 , img_1_3]
    const images_2 = [img_2_1 , img_2_2 , img_2_3 , img_2_4]
    const images_3 = [img_3_1 , img_3_2 , img_3_3 , img_3_4 , img_3_5 , img_3_6]
    const images_4 = [img_4_1 , img_4_2 , img_4_3 , img_4_4 , img_4_5 , img_4_6]
    const images_5 = [img_5_1 , img_5_2 , img_5_3 , img_5_4 , img_5_5 , img_5_6 , img_5_7 , img_5_8 , img_5_9 , img_5_10 , img_5_11 , img_5_12]
    const images_7 = [img_7_1 , img_7_2 , img_7_3 , img_7_4 , img_7_5 , img_7_6]
    const images_8 = [img_8_1 , img_8_2 , img_8_3 ]
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
       
       <Gallary images={images_1} />
       <br></br>
       <Gallary images={images_3} />
       <br></br>
       <Gallary images={images_4} />
       <br></br>
       <Gallary images={images_5} />
       
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
 
export default InteriorProjects;