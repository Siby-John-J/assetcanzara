"use client"

import axios from "axios";
import { useState, useContext } from "react";
import { AdminContext } from "@/context/adminContext";

export default function AdminLogin() {
    const {setIslogin}: any = useContext(AdminContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function authAdmin() {
        if (username !== "" && password !== "") {
            const res = await axios.post(`/admin/auth`, {
                username,
                password,
            })

            setIslogin(res.data)
        }
    }

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[30em] mx-9 mt-[10em]">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Username</label>
                <input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" className="mt-1 p-2 w-full border-2 border-black rounded-md" />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="text" id="password" name="password" className="mt-1 p-2 w-full border-2 border-black rounded-md" />
            </div>

            <button onClick={authAdmin} type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Login</button>
        </div>
        </div>
    );
}