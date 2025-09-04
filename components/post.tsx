export default function({author, publishedAt, body}: {author: string, publishedAt: string, body: string}) {
    return (
        <div className="w-full md:w-5/6 h-auto border-1 rounded-md px-1 mb-4">
            <h2 className="font-semibold">{author}</h2>
            <h3 className="italic text-sm">{publishedAt}</h3>
            <p>{body}</p>
        </div>
    )
}