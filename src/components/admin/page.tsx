"use client"
import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminComp() {
    const [users, SetUsers] = useState([])
    const [refresh, SetRefresh] = useState(false)

    useEffect(() => {
        async function get() {
            const data = await getUsers()
            SetUsers(data)
        }
        get()
    }, [refresh])

    async function deleteUsers(id: any) {
        const data = await axios.post(`/user/delete`, {
            id: id['_id']
        })

        if(data.data === 'deleted') {
            SetRefresh(!refresh)
        }
    }

    return (
        <div className=" flex flex-col items-center bg-slate-200">
            <div className="w-[90vw] mt-8 bg-white px-3 py-4 rounded-md flex flex-row justify-around">
                <h1 className="text-3xl">Welcome Back Admin</h1>
            </div>
            <div className="bg-white mt-8 w-[90vw] flex flex-col items-center rounded-md">
                <h1 className="text-2xl mt-4">Total Users</h1>
                <div className="mt-4 w-full h-fit flex flex-col items-center">
                    <div className="bg-black text-white py-2 w-[80%] flex flex-row justify-evenly items-center rounded-md">
                        <h1 className="font-medium text-[15px]">NAME</h1>
                        <h1 className="font-medium text-[15px]">EMAIL</h1>
                        <h1 className="font-medium text-[15px]">PHONE</h1>
                        <h1 className="font-medium text-[15px]">ACTIONS</h1>
                    </div>
                    <div className="flex flex-col mt-4 text-center w-[80%] h-fit">
                        {
                            users.map((item : any, index: number) : any => {
                                return (
                                    <div key={index} className="mb-6 xlmob:h-7 h-32 flex flex-col xlmob:flex-row justify-evenly items-center bg-slate-300 rounded-md">
                                        <h2>{item.name}</h2>
                                        <h2>{item.email}</h2>
                                        <h2>{item.phone}</h2>
                                        <button onClick={async () => {
                                            await deleteUsers(item)
                                        }} className="bg-red-500 px-6 rounded-md text-white">delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

async function getUsers() {
    const data = await axios.get('/user')

    return data.data
}