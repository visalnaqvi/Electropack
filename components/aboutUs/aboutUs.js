import ContactCard from "../cards/contactcard/ContactCard.js";
import Map from "../map/map.js";
import styles from "./aboutUs.module.css"
const AboutUs = () => {
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>About Us</p>
                <p className={styles.text}>Discover our journey of passion and expertise in construction and interior design. Let&apos;s create something remarkable together.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <div className="margin">
        <h2 className="subHeading">Electropack Engineers</h2>
        <p className="content">We provide full construction plus interior services. We will build your place up from ground we have perfect team for your build. We provide all materials with labor and installation. Contact us for more information.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">What we do</h2>
        <p className="content">We provide construction and interior decoration services. Offering a full complement of services in all aspects of project planning, execution and delivery.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Why us</h2>
        <p className="content">We have earned a special reputation for our willingness to take on assignments with deadlines considered virtually infeasible, and then to do whatever it takes to succeed, assuming full responsibility for supplying the resources required.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Contact Electropack Engineers</h2>
        <p className="content">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>
        </div>
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
    </> );
}
 
export default AboutUs;