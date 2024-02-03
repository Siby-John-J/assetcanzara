"use client"

import { ModelContext } from "@/context/modelContext"
import { useContext, useState } from "react"
import axios from "axios"

interface User {
    name: string,
    email: string,
    phone: string
}

export default function Model(value: any) {
    const {isModel, setTime,
            setDuration, setIsinfo }: any = useContext(ModelContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div className={value.prop}>
            <div className={value.prog}>
                <div className="flex flex-col items-center px-8">
                    <h1 className="text-[20px] font-medium">Name</h1>
                    <input type="text" className="border border-black pl-4 w-[70vw] mob:w-[20em] h-[2em]" onChange={e => {
                        setName(e.target.value)
                    }} />
                    <h1 className="text-[20px] font-medium">Email</h1>
                    <input type="email" className="border border-black pl-4 w-[70vw] mob:w-[20em] h-[2em]" onChange={e => {
                        setEmail(e.target.value)
                    }} />
                    <h1 className="text-[20px] font-medium">Phone number</h1>
                    <input type="number" className="border border-black pl-4 w-[70vw] mob:w-[20em] h-[2em]" onChange={e => {
                        setPhone(e.target.value)
                    }} />
                </div>
                <div className="w-full flex justify-evenly">
                    <button className="text-white bg-red-500 px-10 py-2" onClick={ async () => {
                        if(name !== '' && email !== '' && phone !== '') {
                            const res = await Controls({name, email, phone})
                            const url = '/Asset_Canzara_E_Brochure.pdf'
                            if(res === 'created') {
                                isModel(false)
                                setTime(false)
                                setIsinfo(true)

                                Download(url)
                            }
                        }
                        
                    }}>Submit</button>
                    <button className="text-white px-10 py-2 bg-black" onClick={() => {
                        setDuration(() => {
                            return 20000
                        })
                        isModel(false)
                        setTime(false)
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

async function Controls(data: User) {
    const { name, email, phone } = data

    const request = await axios.post('/user', {
        name,
        email,
        phone
    })

    return request.data
}

function Download(url: string) {
    const filename: any = url.split('/').pop()

    const atag = document.createElement('a')
    atag.href = url
    atag.setAttribute("download", filename)
    document.body.appendChild(atag)
    atag.click()
    atag.remove()
}
