"use client";

import { useActionState, useState } from "react";
import { addPost } from "./actions";
import { H3 } from "@/components/headings";

export default function FormActionExample() {
  const [author, setAuthor] = useState("");

  const noHiddenInputAction = async (
    previousState: any,
    formData: FormData,
  ) => {
    const title = formData.get("title")?.toString() || "";

    // whatever you return here will fill the "state" variable
    return await addPost(previousState, {
      title, // pull from form input
      author, // pull from local React state
    });
  };

  const [state, addPostAction] = useActionState(noHiddenInputAction, null);

  return (
    <section className="flex flex-col gap-2 bg-muted/10 p-2 outline-dashed outline-muted backdrop-blur">
      <H3 className="mb-2 text-red-500">
        useFormAction + Server Action + FormData + Clousure over React State
      </H3>

      <div className="flex flex-col gap-4 sm:items-start md:flex-row">
        <label className="flex flex-col gap-1">
          Author: React State
          <select
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-muted p-1"
          >
            <option hidden>select one</option>
            <option value="anonymus">anonymus</option>
            <option value="luis">luis</option>
            <option value="llanesluis">llanesluis</option>
          </select>
        </label>

        <form action={addPostAction}>
          <label className="flex flex-col gap-1">
            Title: Input value from FormData
            <input
              id="title"
              name="title"
              placeholder="Title"
              className="bg-muted p-1"
            />
          </label>
        </form>
      </div>

      <p>
        Author in uppercase:{" "}
        <span className="text-red-500">{state?.author}</span>
      </p>
      <p>
        Title in reverse: <span className="text-red-500">{state?.title}</span>
      </p>
      {state?.message && (
        <p className="text-muted-foreground">{state?.message}</p>
      )}
    </section>
  );
}
