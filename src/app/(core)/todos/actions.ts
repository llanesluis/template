"use server";

import { db } from "@/lib/db";
import { TodoInsert, todosTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addTodoAction(formData: FormData) {
  const description = (formData.get("todo") as string) || "";
  await db.insert(todosTable).values({ description });
  revalidatePath("/todos");
}

export async function deleteTodoAction(id: number) {
  await db.delete(todosTable).where(eq(todosTable.id, id));
  revalidatePath("/todos");
}

export async function toggleTodoCompletionAction(id: number) {
  const [existingTodo] = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.id, id));

  await db
    .update(todosTable)
    .set({ completed: !existingTodo.completed })
    .where(eq(todosTable.id, id))
    .returning();

  revalidatePath("/todos");
}

export async function clearDatabaseAction() {
  await db.delete(todosTable);
  revalidatePath("/todos");
}

export async function seedDatabaseAction() {
  await db.delete(todosTable);

  const seedTodos: TodoInsert[] = [
    { description: "Default todo", completed: false },
    { description: "Another default todo", completed: false },
    { description: "Completed default todo", completed: true },
  ];

  await db.insert(todosTable).values(seedTodos);
  revalidatePath("/todos");
}
