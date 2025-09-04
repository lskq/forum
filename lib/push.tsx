"use server";
import { client } from "@/sanity/client";

export default async function push(formData: FormData) {
    const text = formData.get("text");

    if (text === null || text === "") return;

    console.log(text);

    const doc = {
        _type: "post",
        author: "Anonymous",
        publishedAt: new Date(),
        body: text,
    }

    client.create(doc);
}