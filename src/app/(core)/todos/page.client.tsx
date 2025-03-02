"use client";

import { Button } from "@/components/ui/button";
import { Todo } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { Check, Clock, Trash } from "lucide-react";
import { deleteTodoAction, toggleTodoCompletionAction } from "./actions";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="flex items-center gap-2">
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
