"use server"

import { NextResponse } from "next/server"
// import { Request } from "express"
import { userModel } from "@/mongodb/model"
import connect from "@/mongodb/config"

export async function GET(req: any) {
    await connect()

    const data = await userModel.find({})
    
    return NextResponse.json(data)
}

export async function POST(req: any) {
    const body = await req.json()
    const { name, email, phone } = body

    await connect()
    try {        
        const create = await userModel.insertMany([{
            name: name,
            email: email,
            phone: phone
        }])

    
    } catch (error) {
        // console.log(error)
    }

    return NextResponse.json('created')
}