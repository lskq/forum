import { PortableText } from "next-sanity"

export default function({author, publishedAt, body}: {author: string, publishedAt: string, body: any}) {
    return (
        <div className="border-1 rounded-md px-1 mb-4">
            <h2 className="font-semibold">{author}</h2>
            <h3 className="italic text-sm">{publishedAt}</h3>
            <PortableText value={body} />
        </div>
    )
}