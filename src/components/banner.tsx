"use client";

import Image from "next/image";
import banner from "../../public/images/banner.jpg";
import { useContext } from "react";
import { ModelContext } from "@/context/modelContext";

export default function Banner() {
    const { model, isModel }: any = useContext(ModelContext);

    return (
        <h1 className="maindiv">
            <div className="absolute top-36 xlsm:w-[20em] w-[14em] md:w-[40em] h-[60vh] left-2 sm:left-48 smmob:left-11 flex flex-col items-start justify-between">
                <h1 className="mob:text-7xl text-5xl smmob:text-6xl md:mb-0 mb-6 md:text-8xl font-semibold text-white">
                    Asset Canzara flat in Trivandrum
                </h1>
                <h2 className="xlsm:text-4xl text-3xl font-medium text-white">
                    Luxury residences at Karyavattom, Trivandrum
                </h2>
                <button
                    className="bg-red-500 text-white px-8 py-3 text-base rounded-md mt-4 sm:mt-0```"
                    onClick={() => {
                        isModel(!model);
                    }}
                >
                    Download Brochure
                </button>
            </div>
            <Image
                src={banner}
                alt="none"
                className="object-cover"
                style={{
                    height: "100vh",
                }}
            />
        </h1>
    );
}
