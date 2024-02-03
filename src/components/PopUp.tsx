"use client"

// import { useContext } from "react"
import Image from "next/image"
// import { ModelContext } from "@/context/modelContext"
import popUpImg from "../../public/images/ap1.jpg"
import Model from "./Model"

export default function PopUp() {
    // const { time, setTime }: any = useContext(ModelContext)

    return (
      <div className="fixed xmob:top-20 top-0 flex flex-row items-center justify-center w-[100vw]">
        <div className=" flex flex-col xmob:w-fit bg-gradient-to-r bg-blue-400 p-8 rounded-md items-center">
          <div className="flex flex-col items-center mb-[20px]">
            <h1 className="text-[25px]">Call Us</h1>
            <p className="text-[20px] font-semibold">
              +91 8075488945
            </p>
          </div>

          <div className="flex flex-col xmob:flex-row items-center">
          <div>
            <Image src={popUpImg} alt="none" className="xmob:w-[20em] xmob:h-[20em] w-[20em] h-[10em] rounded-md object-cover" />
          </div>
          <div>
            <Model prop={""} prog={"xmob:h-[20em] h-[18em] w-fit bg-none rounded-lg flex flex-col items-center justify-evenly"} />
          </div>
          </div>

          <div className="flex xmob:mt-[20px] xmob:w-fit w-[17em] flex-row">
            <input type="checkbox" checked className="h-[22px] w-[22px]" />
            <p className="text-[15px]">
              I agree and authorize team to contact me. This will override the registry with DNC / NDNC
            </p>
          </div>
        </div>
      </div>
    )
}
