export default function({poster, datetime, message}: {poster: string, datetime: string, message: string}) {
    return (
        <div className="border-1 rounded-md px-1 mb-4">
            <h2 className="font-semibold">{poster}</h2>
            <h3 className="italic text-sm">{datetime}</h3>
            <p>{message}</p>
        </div>
    )
}