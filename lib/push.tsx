"use server";
import { client } from "@/sanity/client";

export default async function push(formData: FormData) {
    const author = formData.get("author");
    const text = formData.get("text");
    console.log(author);

    if (text === null || text === "") return;

    console.log(text);

    const doc = {
        _type: "post",
        author: author,
        publishedAt: new Date(),
        body: text,
    }

    client.create(doc);
}