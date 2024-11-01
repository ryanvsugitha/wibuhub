import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { user_name, mal_id } = await request.json();

  try {
    const addFavorite = await prisma.user_favorite.create({
      data: {
        user_name: user_name,
        mal_id: mal_id,
      },
    });

    if (addFavorite.id) {
      return NextResponse.json({
        status: true,
        message: "Succesfully added to favorite!",
      });
    } else {
      return NextResponse.json({
        status: false,
        message: "Failed to add to favorite!",
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
