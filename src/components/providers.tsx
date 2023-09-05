'use client'

import { MantineProvider } from "@mantine/core"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

export default function Providers({ children } : { children: ReactNode}) {
    // define a default query function for react query
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: async ({ queryKey: [url] }) => {
                    // narrow the type of url to string so that we can work with it
                    if (typeof url === "string") {
                        const { data } = await axios.get(`${url}`
                        );
                        return data;
                    }
                    throw new Error("Invalid QueryKey");
                },
            },
        },
    });
    return(
        <QueryClientProvider client={queryClient}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                {children}
            </MantineProvider>
        </QueryClientProvider>
        
    )
}