import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { user_name, password } = await request.json();

  try {
    const user = await prisma.user_credential.findFirst({
      where: {
        user_name: user_name,
      },
    });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return NextResponse.json({
          status: true,
          title: "Login Succesful",
          message: "Redirecting to Home Page!",
        });
      } else {
        return NextResponse.json({
          status: false,
          title: "Wrong password!",
          message: "Please try again!",
        });
      }
    } else {
      return NextResponse.json({
        status: false,
        title: "Username not found!",
        message: "Dont have an account? Consider creating a new account",
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
