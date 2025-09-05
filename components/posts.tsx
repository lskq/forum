import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

import Post from "./post"

const POSTS_QUERY = `*[
  _type == "post"
]|order(publishedAt desc){_id, author, publishedAt, body}`;

export default async function Posts() {
    const postsData = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

    return postsData.map(post => { return ( <Post key={post._id} author={post.author} publishedAt={new Date(post.publishedAt).toLocaleString()} body={post.body}/> ) });
}