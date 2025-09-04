import Input from "../components/input"
import Posts from "../components/posts"

export default async function IndexPage() {
  return (
    <>
      <header className="text-center border-b-1 mb-4 pb-2">
        <h1 className="text-4xl">Forum</h1>
        <span className="italic">It's a forum. What more do you want?</span>
      </header>
      <main className="px-2">
        <Input />
        <Posts />
      </main>
    </>
  );
}