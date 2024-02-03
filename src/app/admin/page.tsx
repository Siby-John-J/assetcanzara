"use client"

import AdminLogin from "@/components/admin/admin"
import AdminComp from "@/components/admin/page"
import { useEffect, useState } from "react"
import { AdminContext } from "@/context/adminContext"

export default function Admin() {
    const [islogin, setIslogin] = useState(false)

    useEffect(() => {
    },[islogin])

    return (
        <div className="">
            <AdminContext.Provider value={{islogin, setIslogin}}>
                {
                    islogin === true ? <AdminComp />: <AdminLogin />
                }
            </AdminContext.Provider>
        </div>
    )
}