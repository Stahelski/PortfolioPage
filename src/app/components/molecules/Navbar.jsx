"use client"

import React from "react"
import Link from "next/link"
import css from "../../globals.css"

export default function Navbar(){
    return(
    <>
    <div className="Navbar z-[2] flex justify-around items-center h-[8.2dvh] rounded-[27px_27px_0_0] w-fill">
        <Link href="/src/app/pages/frontPage/page.jsx" className="cursor-pointer text-[6dvh]">FrontendForge</Link>
        <Link href="/src/app/pages/contactPage/page.jsx" className="cursor-pointer text-[6dvh]">Contact</Link>
    </div>
    </>
    )
};