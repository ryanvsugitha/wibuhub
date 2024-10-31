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
      const saltRounds = 10; // Higher values = slower hashing, but more secure
      //   const hashedPassword = await bcrypt.hash(password, saltRounds);
      bcrypt.hash(password, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        console.log("password: " + password + "\n" + "hashed: " + hash);
      });

      const registerUserDetail = await prisma.user_detail.create({
        data: {
          user_name: user_name,
          user_email: email,
        },
      });

      const registerUserCredential = await prisma.user_credential.create({
        data: {
          user_name: user_name,
          password: password,
        },
      });

      if (
        registerUserDetail &&
        registerUserDetail.id &&
        registerUserCredential &&
        registerUserCredential.id
      ) {
        return NextResponse.json({
          status: true,
          message: "Register Succesful",
        });
      } else {
        return NextResponse.json({
          status: false,
          message: "Failed to register",
        });
      }
    } else {
      return NextResponse.json({
        status: false,
        message: "Username or Email already existed!",
      });
    }

    // if (user) {
    //   return NextResponse.json({ status: true, message: "Login Succesful" });
    // } else {
    //   return NextResponse.json({
    //     status: false,
    //     message: "Username doesn't match",
    //   });
    // }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
