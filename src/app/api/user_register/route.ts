import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { User } from "@/app/model/database";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { user_name, email, password } = await request.json();

  try {
    const userExist: User[] = await prisma.user_detail.findMany({
      where: {
        OR: [{ user_name: user_name }, { user_email: email }],
      },
    });

    if (userExist.length == 0) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const registerUserDetail = await prisma.user_detail.create({
        data: {
          user_name: user_name,
          user_email: email,
        },
      });

      const registerUserCredential = await prisma.user_credential.create({
        data: {
          user_name: user_name,
          password: hashedPassword,
        },
      });

      if (registerUserDetail.id && registerUserCredential.id) {
        return NextResponse.json({
          status: true,
          title: "Register Succesful!",
          message: "You may log in",
        });
      } else {
        return NextResponse.json({
          status: false,
          title: "Failed to register!",
          message: "Please try again!",
        });
      }
    } else {
      return NextResponse.json({
        status: false,
        title: "Failed to register!",
        message: "Username or Email already existed!",
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
