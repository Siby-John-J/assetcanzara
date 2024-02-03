"use client"

import BuildingIcon from '../icon/building'
import WallIcon from '../icon/wall'
import Apartment from '../icon/apartment'

export default function Features() {
    return (
        <div className="w-full flex flex-col items-center mt-10 bg-slate-200">
            <div className="title w-fit text-center mt-4">
                <h1 className="text-3xl font-medium">Why you choose Canzara?</h1>
                <p className="mt-4">
                    K-RERA <b>|</b> K-RERA/PRJ/TVM/152/2022
                </p>
            </div>
            <div className="flex flex-col mdmob:h-full h-[90vh] mdmob:flex-row w-[100vw] sm:w-[100vw] md:w-[80vw] lg:w-[60vw] justify-evenly mt-4 mb-14">
                <div className="bhk bg-red-500 rounded-md mdmob:h-[14em] h-[10em] sm:w-[12em] mdmob:w-[10em] w-[100vw] flex flex-col items-center justify-evenly">
                    <Apartment />
                    <h1 className="text-2xl font-medium text-white">2 & 3 BHK</h1>
                </div>
                <div className="sq bg-red-500 rounded-md mdmob:h-[14em] h-[10em] sm:w-[12em] mdmob:w-[10em] w-[100vw] flex flex-col items-center justify-evenly">
                    <WallIcon />
                    <h1 className="text-2xl font-medium text-white text-center">1037 to 1634 SQFT</h1>
                </div>
                <div className="ami bg-red-500 rounded-md mdmob:h-[14em] h-[10em] sm:w-[12em] mdmob:w-[10em] w-[100vw] flex flex-col items-center justify-evenly">
                    <BuildingIcon />
                    <h1 className="text-2xl font-medium text-white text-center">MODERN AMENITIES</h1>
                </div>
            </div>
        </div>
    )
}