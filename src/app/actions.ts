"use server";

type Post = {
  title: string;
  author: string;
};

export async function addPost(previousState: any, { title, author }: Post) {
  // ...
  // your logic that will run server side because this is a server action
  // ...

  console.log({ title, author });

  // whatever you return here will fill the "state" variable
  return {
    message: "Check your server console :p",
    title: title.split("").toReversed().join(""),
    author: author.toUpperCase(),
  };
}
