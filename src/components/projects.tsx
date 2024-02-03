import Image from "next/image"
import TypeA from "../../public/projects/TYPE-A(2nd).png"
import TypeA1 from "../../public/projects/TYPE-A1(1st).png"
import TypeC from "../../public/projects/TYPE-C.png"
import TypeB from "../../public/projects/TYPE-B(2nd).png"
import TypeB1 from "../../public/projects/TYPE-B1.png"

const Projects = () => {
    return (
        <div className="w-full flex flex-col items-center mt-[3em]">
            <div className="titleBox w-fit flex text-center">
                <h1 className="text-5xl font-semibold">Canzara Flat Projects</h1>
            </div>

            <div className="projects w-[95vw] mt-9 h-fit grid grid-row-2 xlmob:grid-cols-3 smmob:grid-cols-2 grid-cols-1 gap-y-6 text-center">
                <div className="flex flex-col rounded-xl shadow-2xl xlmob:w-[30vw] smmob:w-[40vw] h-fit bg-white items-center mdmob:px-8 px-2 border border-solid">
                    <h1 className="text-3xl smmob:text-[15px] md:text-3xl xmob:text-2xl font-light mb-5 mt-5">Type A - 2nd to 20th Floor</h1>
                    <Image src={TypeA} alt="none" className="object" style={{
                        // "height": "20em",
                        // "width" : "20em",
                    }} />
                </div>
                
                <div className="flex flex-col rounded-xl shadow-2xl xlmob:w-[30vw] smmob:w-[40vw] h-fit bg-white items-center mdmob:px-8 px-2 border border-solid">
                    <h1 className="text-3xl smmob:text-[15px] md:text-3xl xmob:text-2xl font-light mb-5 mt-5">Type A1 - 1st Floor</h1>
                    <Image src={TypeA1} alt="none" className="object-cover" style={{
                        // "height": "20em",
                        // "width" : "20em",
                    }} />
                </div>

                <div className="flex flex-col rounded-xl shadow-2xl xlmob:w-[30vw] smmob:w-[40vw] h-fit bg-white items-center mdmob:px-8 px-2 border border-solid">
                    <h1 className="text-3xl smmob:text-[15px] md:text-3xl xmob:text-2xl font-light mb-5 mt-5">Type C - 2nd to 20th Floor</h1>
                    <Image src={TypeC} alt="none" className="object-cover" style={{
                        // "height": "20em",
                        // "width" : "20em",
                    }} />
                </div>

                <div className=" flex flex-col rounded-xl shadow-2xl xlmob:w-[30vw] smmob:w-[40vw] h-fit bg-white items-center mdmob:px-8 px-2 border border-solid">
                    <h1 className="text-3xl smmob:text-[15px] md:text-3xl xmob:text-2xl font-light mb-5 mt-5">Type B - 2nd to 20th Floor</h1>
                    <Image src={TypeB} alt="none" className="object-cover" style={{
                        // "height": "20em",
                        // "width" : "20em",
                    }} />
                </div>

                <div className="flex flex-col rounded-xl shadow-2xl xlmob:w-[30vw] smmob:w-[40vw] h-fit bg-white items-center mdmob:px-8 px-2 border border-solid">
                    <h1 className="text-3xl smmob:text-[15px] md:text-3xl xmob:text-2xl font-light mb-5 mt-5">Type B1 - 1th Floor</h1>
                    <Image src={TypeB1} alt="none" className="object-cover" style={{
                        // "height": "20em",
                        // "width" : "20em",
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Projects
