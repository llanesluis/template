"use server";

type Post = {
  title: string;
  author: string;
};

export async function addPost(previousState: unknown, { title, author }: Post) {
  // ...
  // your logic that will run server side because this is a server action
  // ...

  // eslint-disable-next-line no-console
  console.log({ title, author });

  // whatever you return here will fill the "state" variable
  return {
    message: "Check your server console :p",
    title: title.split("").toReversed().join(""),
    author: author.toUpperCase(),
  };
}
