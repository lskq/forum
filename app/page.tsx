import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

import Post from "../components/post"
import PostButton from "../components/postButton"

const POSTS_QUERY = `*[
  _type == "post"
]|order(publishedAt desc)[0...12]{_id, author, publishedAt, body}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const postsData = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(postsData[0].body);

  const postsMarkup = postsData.map(post => { return ( <Post key={post._id} author={post.author} publishedAt={new Date(post.publishedAt).toLocaleString()} body={post.body}/> ) });

  return (
    <>
      <header className="text-center border-b-1 mb-4">
        <h1 className="text-4xl">Forum</h1>
        <span className="italic">It's a forum. What more do you want?</span>
      </header>
      <main className="px-2">
        {postsMarkup}
        <PostButton />
      </main>
    </>
  );
}