"use server";
import { client } from "@/sanity/client";

export default async function push(formData: FormData) {
    const text = formData.get("text");

    if (text === null || text === "") return;

    const author = formData.get("author");

    console.log(`[${author}] ${text}`);

    const doc = {
        _type: "post",
        author: author,
        publishedAt: new Date(),
        body: text,
    }

    client.create(doc);
}