"use server"

import { NextResponse } from "next/server";
import connect from "@/mongodb/config";
import { adminModel } from "@/mongodb/model";

export async function POST(req: any) {
    await connect()

    const data = await req.json()
    const res = await adminModel.findOne({ username: data.username, password: data.password })

    if(res !== null) {
        return NextResponse.json(true)
    } else {
        return NextResponse.json(false)
    }
}
