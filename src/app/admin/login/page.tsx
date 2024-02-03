"use client"

import axios from "axios";
import { useState } from "react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function authAdmin() {
        const domain: any = process.env.DOMAIN
        if (username !== "" && password !== "") {
            const res = await axios.post(`${domain}admin/auth`, {
                username,
                password,
            })

            setUsername('')
            setPassword('')
        }
    }

    return (
        <div className="">
            <div className="">
                <label htmlFor="">Username</label>
                <input onChange={e => setUsername(e.target.value)} type="text" />
                <label htmlFor="">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="text" />
                <button onClick={authAdmin}>submit</button>
            </div>
        </div>
    );
}
