import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

import Post from "../components/post"
import PostButton from "../components/postButton"

/* const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`; */

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  /* const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options); */

  return (
    <>
      <header className="text-center border-b-1 mb-4">
        <h1 className="text-4xl">Forum</h1>
        <span className="italic">It's a forum. What more do you want?</span>
      </header>
      <main className="px-2">
        <Post poster="Bob" datetime="2025-09-03 10:26" message="This is a test." />
        <PostButton />
      </main>
    </>
  );
}