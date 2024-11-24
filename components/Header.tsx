import { ReactNode } from "react"
import icon from "../public/shakacode-icon.svg"
import Image from "next/image"

export default function Header({children}: {children: ReactNode}){
    return (
        <header className="px-4 pt-10 pb-5">
            <div className="flex gap-10 mx-auto w-[80%]">
                <span className="text-3xl font-bold">Shakacode</span>

                {children}
            </div>
        </header>
    )
}