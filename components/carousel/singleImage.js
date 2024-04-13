import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation.js"

const SingleImage = ({url})=>{
    const size = useWindowSize();
    const router = useRouter()

    return(
        <div className="backgroundImgWrapper">
            {size.width>615 ? <Image onClick={()=>{router.push("/login")}} className="backgroundImg" fill={false} height={500} style={{objectFit: "cover" , objectPosition:"left"}} src={url[0]} alt="iraq ziyarat packages" />
            :<Image onClick={()=>{router.push("/login")}} className="backgroundImg" fill={false} height={400} style={{objectFit: "cover" , objectPosition:"left"}} src={url[0]} alt="iraq ziyarat packages" />}
            </div>          
    )
}

export default SingleImage