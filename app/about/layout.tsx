import Link from "next/link";
import React from "react";

export default function AboutLayout({children}: {children: React.ReactNode}) {
    return <div>
        <h1>about us</h1>
        <ul>
            <li>
                <Link href="/about/contacts">Contacts</Link>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
        {children}
    </div>
}