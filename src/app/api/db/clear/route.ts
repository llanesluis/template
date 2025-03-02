import { db } from "@/lib/db";
import { todosTable } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  await db.delete(todosTable);

  return NextResponse.json("Database cleared!");
}
