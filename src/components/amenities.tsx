"use client"

import GymIcon from "../icon/gymIcon";
import HouseIcon from "../icon/houseIcon";
import PoolIcon from "../icon/poolIcon";
import GameIcon from '../icon/gameIcon'
import PlaygroundIcon from '../icon/playgroundIcon'
import TheaterIcon from '../icon/theaterIcon'
import HealthIcon from '../icon/healthIcon'
import PartyIcon from '../icon/partyIcon'
import { useState, useMemo } from "react"

export default function Amienities() {
    const [color, Setcolor] = useState('')
    Setcolor('#fffff')
    const memoizedColor = useMemo(() => color, [color]);

    const names = ['Gym','Clubhouse','Swimming Pool','Games Room',
                    'Kids Play Area','Minitheater', 'Health Center', 'Party Area'
                ]
    
    return (
        <div className="w-full h-full bg-black flex flex-col items-center pb-2">
            <div className="w-fit text-center mt-12">
                <h1 className="smmob:text-6xl text-5xl font-semibold text-white">AMENITIES</h1>
                <p className="text-[18px] text-white w-[80vw] mt-5">
                    The 2 & 3BHK apartment units in this project provide enough space for every family and are designed in such a manner to cherish warmth and social closeness as a community. The apartments are carefully designed to have brilliant air ventilation and also with balconies for beautifying your space.
                    The project contains special corners to have fun and joy. Kids play corner, games room and gymnasium facilities are meant for that.
                    We have designed your home with utmost care for the keen features. The amenities provided by Asset Canzara at Karyavattom will enable you to enjoy the traditional heritage as well as the comfort of the new generation.
                </p>
            </div>
            
            <div className="h-fit w-fit mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg"
                        style={{
                            "backgroundColor" : memoizedColor === "#ffffff" ? "#ff0000" : "#ffffff"
                        }}
                        >
                        <GymIcon props={{'color': memoizedColor}}/>
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white" style={{
                        color: memoizedColor
                    }}>{names[0]}</h1>
                </div>

                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg"
                            style={{
                                "backgroundColor" : memoizedColor === "#ffffff" ? "#ff0000" : "#ffffff"
                            }}
                            >
                        <HouseIcon props={{'color': color}}/>
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[1]}</h1>
                </div>
                
                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg">
                        <PoolIcon props={{'color': memoizedColor}} />
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[2]}</h1>
                </div>

                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg">
                        <GameIcon props={{'color': memoizedColor}} />
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[3]}</h1>
                </div>

                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg">
                        <PlaygroundIcon props={{'color': memoizedColor}} />
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[4]}</h1>
                </div>

                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg">
                        <TheaterIcon props={{'color': memoizedColor}} />
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[5]}</h1>
                </div>

                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg">
                        <HealthIcon props={{'color': memoizedColor}} />
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[6]}</h1>
                </div>

                <div className="w-[8em] xlsm:w-[10em] mdmob:w-[15em] h-[15em] flex flex-col items-center">
                    <div className="bg-white p-7 rounded-lg">
                        <PartyIcon props={{'color': memoizedColor}} />
                    </div>
                    <h1 className="mt-6 text-[20px] font-medium text-white">{names[7]}</h1>
                </div>
            </div>
        </div>
    );
}

// const ChildComponents = ({initialColor, name}) => {
//     return (
//         <>
//                 <div className="w-[15em] h-[15em] flex flex-col items-center">
//                     <div className="bg-white p-7 rounded-lg" onMouseEnter={e =>
//                             Setcolor('#ffffff')
//                         }
//                         onMouseLeave={e =>
//                             Setcolor('#ff0000')
//                         }
//                         style={{
//                             "backgroundColor" : memoizedColor === "#ffffff" ? "#ff0000" : "#ffffff"
//                         }}
//                         >
//                         <GymIcon props={{'color': memoizedColor}}/>
//                     </div>
//                     <h1 className="mt-6 text-[20px] font-medium text-white" style={{
//                         color: memoizedColor
//                     }}>{names[0]}</h1>
//                 </div>
//         </>
//     )
// }