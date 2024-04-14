import ImageCard from "@/components/cards/imageCard/imageCard"
import CarouselComp from "@/components/carousel/carousel"
import services from "../data/services.js"
import features from "../data/features.js"
// import heroVideo from "../public/gallary/hero.mp4"
// import heroVideo2 from "../public/gallary/hero2.mp4"
import testi from "../data/testimonials.js"
import Map from "../components/map/map.js"
import longBanner from "../public/backgroundImages/long_banner.png"
import SingleImage from "../components/carousel/singleImage.js"
import background from "../public/sliders/homePageSlider/desktop/slider_1.png"
import background_mb from "../public/sliders/homePageSlider/mobile/slider_1_mb.png"
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head.js"
import Image from "next/image.js"
import img_1_1 from "../public/gallary/interior/1/1.jpg"
import img_5_1 from "../public/gallary/interior/5/31.jpeg"
import img_5_3 from "../public/gallary/interior/5/33.jpeg"
import img_3_2 from "../public/gallary/interior/3/28.jpeg"

import img_9_10 from "../public/gallary/construction/17.jpg"
import img_9_9 from "../public/gallary/construction/16.jpg"
import img_9_5 from "../public/gallary/construction/12.jpg"


import TestimonialCard from "@/components/cards/testimonialCard/testimonialCard.js"
import { useRouter } from "next/navigation.js"
import VideoHero from "@/components/videoHero/videoHero.js"
import Gallary from "@/components/gallary/gallary.js"
export default function Home() {

const size = useWindowSize();
const router = useRouter();

const images_1 = [img_1_1 , img_5_1 , img_5_3 , img_3_2]
const images_2 = [img_9_10 , img_9_9 , img_9_5 ]
  return (
   
    <div>
       <Head>
      <title>Best Interior and Construction Service in Noida</title>
    </Head>
    
        <SingleImage url={[background , background_mb]} /> 
      
        <div className="margin">
          <div className="body-wrapper justify-between">
            <h2 className="subHeading">Our foundation</h2>
            <a className="contact-button" href="tel:+9911390398"><button className="primary-btn blue">Contact Us On: +919911390398</button></a>
          </div>
          
            <p className="content">Welcome to Electropack Constructions and Interiors where craftsmanship meets innovation in construction and interior design. With a passion for precision and an unwavering commitment to quality, we specialize in turning your dreams into reality, whether it&apos;s crafting your ideal home or optimizing your office space for maximum efficiency and style. Backed by a team of skilled professionals and guided by a dedication to client satisfaction, we blend creativity with technical expertise to deliver projects that inspire and endure. Explore our comprehensive range of services and let us bring your vision to life, one meticulous detail at a time.</p>
           <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/interiorProjects")}} style={{marginRight:"10px"}}>Explore Interior Projects</button>
            <button className="primary-btn blue" onClick={()=>{router.push("/exteriorProjects")}}>Explore Exterior Projects</button>
            </div>
            <div style={{position:"relative", width:"100%", height:`${size.width<800?"200px":"400px"}`}}>
            <Image onClick={()=>{router.push("/login")}} src={longBanner} fill={true} style={{objectFit:"contain"}} alt="some"/>
          </div>
         <VideoHero />
          <h2 className="boldHeading center">Our Services</h2>
          <div className="body-wrapper">
              {
                services.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>
          
          <h2 className="subHeading center">Recent Interior Projects</h2>
          <Gallary images={images_1}></Gallary>
          <div className="body-wrapper">
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/interiorProjects")}}>Explore More Interior Projects</button>
              </div>
          <h2 className="subHeading center">Recent Exterior Projects</h2>
          <Gallary images={images_2}></Gallary>
          <div className="body-wrapper">
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/exteriorProjects")}}>Explore More Exterior Projects</button>
              </div>
          <h2 className="subHeading center">What our customers say?</h2>
          <div className="body-wrapper">
              {
                testi.map((d,i)=>(
                  <TestimonialCard key={i} data={d} />
                ))
              }
          </div>
         
          <h2 className="subHeading center">Why to choose Us?</h2>
          <p className="content center">Choose us for our unwavering commitment to excellence in every aspect of your project. With a proven track record of delivering exceptional results, we prioritize client satisfaction above all else. Our team of seasoned professionals combines creativity with technical expertise to bring your vision to life, ensuring every detail is meticulously executed to perfection. From personalized service and transparent communication to efficient project management and top-notch craftsmanship, we go above and beyond to exceed your expectations. When you choose us, you&apos;re choosing a partner dedicated to making your construction and interior design journey seamless, enjoyable, and ultimately, unforgettable.</p>
        </div>
        <div className="body-wrapper">
              {
                features.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>
        
        <h2 className="subHeading center">Visit Us</h2>
        {/* <p className="content center"><strong style={{color:"#000"}}>Laxmi Nagar Branch:</strong> 1/53, Ist Floor, Lalita Park, Laxmi Nagar, Delhi-92</p>
        <p className="content center"><strong style={{color:"#000"}}>Okhla Branch:</strong> 334E, 3rd Floor, Batla House Chowk, Jamia Nagar, Okhla, Upper Rajdhani Medical Store, New Delhi, Delhi-110025</p> */}
        <Map />
        <br></br>
    </div>
  )
}
