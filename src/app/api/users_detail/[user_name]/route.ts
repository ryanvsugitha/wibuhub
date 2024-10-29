import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { user_name: string } }
) {
  console.log(params.user_name);
  try {
    const user = await prisma.user_detail.findFirst({
      where: {
        user_name: params.user_name,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
