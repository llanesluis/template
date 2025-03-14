"use client";

import { Button } from "@/components/ui/button";
import { Todo } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { Check, Clock, Trash } from "lucide-react";
import { deleteTodoAction, toggleTodoCompletionAction } from "./actions";
import { useRouter } from "next/navigation";

export default function TodoItem({ todo }: { todo: Todo }) {
  // const router = useRouter();
  return (
    <li className="flex items-center gap-2">
      {/* <Button
        variant={"ghost"}
        onClick={async () => {
          await fetch("/api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: todo.id }),
            });
            
            router.refresh();
            }}
            > */}
      <Button variant={"ghost"} onClick={() => deleteTodoAction(todo.id)}>
        <Trash />
      </Button>
      <Button
        variant={"ghost"}
        onClick={() => toggleTodoCompletionAction(todo.id)}
      >
        {todo.completed ? <Clock /> : <Check />}
      </Button>

      <p className={cn(todo.completed && "line-through")}>{todo.description}</p>
    </li>
  );
}
