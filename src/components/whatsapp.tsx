"use client"

import Image from "next/image";
import Whatsapp from "../../public/icons/whatsapp.png"
import ReactWhatsapp from "react-whatsapp";

export default function WhatsappChat() {
    return (
        <div className="fixed top-[85vh] w-[100vw] z-10">
            <ReactWhatsapp className="flex flex-row bg-slate-900 rounded-lg float-end"
                            number="+91 8075488945" message="" element="button">
                <h1 className="mt-4 text-white text-2xl px-7">Chat with us</h1>
                <Image className="mr-5" src={Whatsapp} alt="none" style={{
                    width: "70px"
                }} />
            </ReactWhatsapp>
        </div>
    )
}
