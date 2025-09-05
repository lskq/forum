"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import push from "../lib/push"

export default function input() {
    const { isSignedIn, user } = useUser();

    const name = isSignedIn ? user.firstName : "Anonymous";

    const router = useRouter();

    const submit = (x: FormData) => {
        push(x);
        setTimeout(() => router.refresh(), 2000);
    }

    return (
        <form action={submit} className="w-full md:w-5/6">
            <input className="hidden" name="author" type="text" value={name!} readOnly />
            <textarea name="text" className="w-full focus:outline-0 border-1 rounded-md px-1 mb-1" placeholder="Write your post here." /><br />
            <button type="submit" className="h-2/3 bg-foreground text-background rounded-md p-1 hover:bg-gray-500 active:bg-amber-300 active:text-black mb-4 mr-4">
                Post
            </button>
            <span className="italic text-sm">Currently posting as <span className="font-semibold">{name}</span></span>
        </form>
    )
}