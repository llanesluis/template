import { db } from "@/lib/db";
import { TodoInsert, todosTable } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  await db.delete(todosTable);

  const seedTodos: TodoInsert[] = [
    { description: "Default todo", completed: false },
    { description: "Another default todo", completed: false },
    { description: "Completed default todo", completed: true },
  ];

  await db.insert(todosTable).values(seedTodos);
  revalidatePath("/todos");

  return NextResponse.json("Seed completed!");
}
