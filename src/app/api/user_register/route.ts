import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { use } from "react";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { user_name, password } = await request.json();

  try {
    const user = await prisma.user_credential.create({
      data: {
        user_name: user_name,
        password: password,
      },
    });

    if (user) {
      return NextResponse.json({ status: true, message: "Login Succesful" });
    } else {
      return NextResponse.json({
        status: false,
        message: "Username doesn't match",
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
