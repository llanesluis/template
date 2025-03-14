import { db } from "@/lib/db";
import { todosTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  await db.delete(todosTable).where(eq(todosTable.id, id));
  revalidatePath("/todos");

  return NextResponse.json({ message: "Deleted" });
}
