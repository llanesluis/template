import { FreshnessTimer } from "@/app/_components/timer";
import { H1 } from "@/components/headings";
import { LoadingButton } from "@/components/loading-button";
import { Button } from "@/components/ui/button";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import { db } from "@/lib/db";
import { todosTable } from "@/lib/db/schema";
import {
  addTodoAction,
  clearDatabaseAction,
  seedDatabaseAction,
} from "./actions";
import TodoItem from "./page.client";

export const dynamic = "force-dynamic";

export default async function TodosPage() {
  const todos = await db.select().from(todosTable).orderBy(todosTable.id);
  const generatedAt = Date.now();

  return (
    <ContainerWrapper>
      <SectionWrapper className="space-y-4">
        <FreshnessTimer generatedAt={generatedAt} />

        <H1>Server Actions</H1>
        <p className="text-muted-foreground text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          nisi maxime, mollitia quos unde molestiae fugit quisquam
          exercitationem, laudantium aliquid?
        </p>
      </SectionWrapper>

      <SectionWrapper className="space-y-4">
        <form className="flex gap-2">
          <Button variant={"destructive"} formAction={clearDatabaseAction}>
            Clear database
          </Button>
          <Button variant={"secondary"} formAction={seedDatabaseAction}>
            Seed intial database
          </Button>
        </form>

        <form action={addTodoAction} className="flex items-center gap-2">
          <input
            type="text"
            name="todo"
            placeholder="Break production..."
            className="bg-muted p-2"
          />
          <LoadingButton>Add todo</LoadingButton>
        </form>

        <ol className="mr flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ol>
      </SectionWrapper>
    </ContainerWrapper>
  );
}
