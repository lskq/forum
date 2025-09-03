export default function input() {
    return (
        <>
            <textarea className="w-5/6 focus:outline-0 border-1 rounded-md px-1 mb-1" placeholder="Write your post here."/><br/>
            <button className="h-2/3 bg-foreground text-background rounded-md p-1 active:bg-background active:text-foreground mb-4">
                Post
            </button>
        </>
    )
}