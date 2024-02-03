import Image from "next/image"
import Map from '../../public/images/map.jpg'

export default function Banner2() {
    return (
        <div>
            <Image src={Map} alt="none" className=""/>
        </div>
    )
}
