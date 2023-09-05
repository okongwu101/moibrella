import NavBar from "@/components/navbar";
import Providers from "@/components/providers";
import { ReactNode } from "react";
import { Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export default function LayoutPages({ children }: { children: ReactNode }) {
    return (
        <div className={openSans.className}>
            <Providers>
                <NavBar />
                {children}
            </Providers>
        </div>
    )
}