"use client"

import Banner from "../components/banner";
import Banner2 from "../components/banner2";
import Dialog1 from "../components/dialog-1";
import Features from "@/components/features";
import Amienities from "@/components/amenities";
import Projects from "@/components/projects";
import Footer from "../components/footer";
import WhatsappChat from "@/components/whatsapp";
import { useState, useEffect } from "react";
import { ModelContext } from "@/context/modelContext";
import Model from "@/components/Model";
import PopUp from "@/components/PopUp";

export default function Home() {
  const [model, isModel] = useState(false)
  const [time, setTime] = useState(false)
  const [duration, setDuration] = useState(5000)
  const [popping, setPopping] = useState(true)
  const [isinfo, setIsinfo] = useState(false)

  useEffect(() => {
    if(popping === true && isinfo === false) {
      setTimeout(() => {
        setTime(true)
      }, duration)
    }

    if(duration === 20000) {
      setPopping(false)
    }
  }, [duration])

  return (
    <ModelContext.Provider value={{
      model, isModel,
      time, setTime,
      duration, setDuration,
      setIsinfo
    }}>
      <div className="maindiv">
        <WhatsappChat />
        <Banner />
        <Dialog1 />
        <Features />
        <Banner2 />
        <Amienities />
        <Projects />
        <Footer />
      </div>

      {
        model === true && <div className="w-[100vw] fixed top-20 flex justify-center">
          <Model prop={""} 
          prog={"h-[20em] xmob:w-fit w-[90vw] bg-white rounded-lg flex flex-col items-center justify-evenly border-[2px] border-black"}/>
        </div>
      }

      {
        time === true && <PopUp />
      }
    </ModelContext.Provider>
  )
}
