import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation.js"

const SingleImage = ({url})=>{
    const size = useWindowSize();
    const router = useRouter()

    return(
        <div className="backgroundImgWrapper">
            {
        size.width > 700 ?
         <Image onClick={()=>{router.push("/login")}} className="backgroundImg" fill={true} style={{objectFit: "cover" , objectPosition:"left"}} src={url[0]} alt="iraq ziyarat packages" />:
         <Image className="backgroundImg" width={"100%"} height={250} src={url[1]} alt="iraq ziyarat packages" />}
        </div>
    )
}

export default SingleImage