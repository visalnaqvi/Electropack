import Image from "next/image";
import styles from "./gallary.module.css"
const Gallary = ({images})=>{
    return(
        <div className={`body-wrapper justify-between ${styles.wrapper}`}>
             
            {
                images.map((e,i)=>(
                    <div key={i} className={styles.backgroundImgWrapper}>
                    <Image className={styles.backgroundImg} 
                    fill={true} style={{objectFit: "contain" , objectPosition:"center" , margin:"40px"}} 
                    // width={500} height={500}
                    src={e} alt="iraq ziyarat packages" />
                    </div>
                ))
            }
         
        </div>
    )
}

export default Gallary;