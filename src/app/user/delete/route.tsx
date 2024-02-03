"use server"

import { NextResponse } from "next/server"
import { userModel } from "@/mongodb/model"
import connect from "@/mongodb/config"

export async function POST(req: any) {
    await connect()
    const params = await req.json()

    try {
        await userModel.findByIdAndDelete(params.id)
    } catch (error: any) {
        // console.log(error)
    }

    return NextResponse.json('deleted')
}