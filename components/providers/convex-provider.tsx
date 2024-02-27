"use client"

import { ReactNode} from "react";

import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider,useAuth } from "@clerk/clerk-react";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ConvexClientProvider = ({children}:{children:ReactNode}) => {
    return (
        // If u don't pass a children here you will get an errror , not really explicit in my case
        <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
            <ConvexProviderWithClerk
            useAuth={useAuth}
            client={convex}>

            {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}