import prisma from "@/libs/prismadb"
import bcrypt from "bcrypt"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, username, name, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    })

    return res.status(200).json(user)
    return NextResponse.json({ id: session.id })
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
