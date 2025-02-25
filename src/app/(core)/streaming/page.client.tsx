"use client";

import { H3 } from "@/components/headings";
import { use, useActionState, useState } from "react";
import { addPost } from "../../actions";
import { LoadingButton } from "@/components/loading-button";

export default function FormActionExample({
  sessionPromise,
}: {
  sessionPromise: Promise<{ userId: string }>;
}) {
  const session = use(sessionPromise);
  const [author, setAuthor] = useState("");

  const noHiddenInputAction = async (
    previousState: any,
    formData: FormData,
  ) => {
    const title = formData.get("title")?.toString() || "";

    await new Promise((r) => setTimeout(r, 1000));

    // whatever you return here will fill the "state" variable
    return await addPost(previousState, {
      title, // pull from form input
      author, // pull from local React state
    });
  };

  const [state, addPostAction, isLoading] = useActionState(
    noHiddenInputAction,
    null,
  );

  return (
    <section className="bg-muted/10 outline-muted flex flex-col gap-2 p-2 backdrop-blur-sm outline-dashed">
      <H3 className="text-gradient mb-2">
        useActionState + Server Action + FormData + Clousure over React State
      </H3>

      <div className="flex flex-col gap-x-8 gap-y-4 md:flex-row">
        <label className="flex flex-col gap-2">
          Author: React State
          <select
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-muted p-1"
          >
            <option hidden>select one</option>
            <option value="anonymous">anonymous</option>
            <option value="luis">luis</option>
            <option value="llanesluis">llanesluis</option>
          </select>
        </label>

        <form action={addPostAction} className="flex flex-wrap items-end gap-2">
          <label className="flex flex-col gap-2">
            Title: Input value from FormData
            <input
              id="title"
              name="title"
              placeholder="Title"
              className="bg-muted p-1"
              defaultValue={session.userId}
            />
          </label>
          <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
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
