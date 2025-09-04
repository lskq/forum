"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import push from "../lib/push"

export default function input() {
    const { isSignedIn, user } = useUser();

    const name = isSignedIn ? user.firstName : "Anonymous";

    return (
        <form action={push}>
            <input className="hidden" name="author" type="text" value={name!} readOnly />
            <textarea name="text" className="w-5/6 focus:outline-0 border-1 rounded-md px-1 mb-1" placeholder="Write your post here."/><br/>
            <button onClick={useRouter().refresh}  type="submit" className="h-2/3 bg-foreground text-background rounded-md p-1 active:bg-background active:text-foreground mb-4">
                Post
            </button>
        </form>
    )
}