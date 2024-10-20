"use client"

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";

export default function HeroForm() {


    useEffect(() => {
        if ('localStorage' in window
            && window.localStorage.getItem('desiredUsername')
        ) {
            const username = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem("desiredUsername");
            redirect('/account?desiredUsername=' + username);

        }
    }, [])

    const [username, SetUsername] = useState("")

    async function handleSubmit(ev) {
        ev.preventDefault();
        if (username.length > 0) {
            window.localStorage.setItem('desiredUsername', username)
            await signIn('google');
        }
    }


    return (
        <form onSubmit={handleSubmit} className="inline-flex items-center shadow">
            <span className="bg-white py-4 pl-4">linklist.to/</span>
            <input value={username} onChange={ev => SetUsername(ev.target.value)} type="text" className="py-4 outline-none" placeholder="username" />
            <button type="submit" className="bg-blue-500 text-white p-4 px-6">
                Join for free
            </button>
        </form>
    );
}