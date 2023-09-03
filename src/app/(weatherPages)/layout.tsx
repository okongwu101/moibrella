import NavBar from "@/components/navbar";
import Providers from "@/components/providers";
import { ReactNode } from "react";

export default function LayoutPages({ children }: { children: ReactNode }) {
    return (
        <div>
            <Providers>
                <NavBar />
                {children}
            </Providers>
        </div>
    )
}