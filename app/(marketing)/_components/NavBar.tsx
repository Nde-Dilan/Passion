"use client"

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react'
import Logo from './Logo';
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';

const NavBar = () => {
  const scrolled = useScrollTop();
  //Convex -Clerk Integration

  const {isAuthenticated,isLoading} = useConvexAuth();

  return (
    <nav className={cn("z-50 bg-background fixed top-0 items-center w-full p-6 dark:bg-[#1F1F1F]", scrolled && "border-shadow-sm")}>
        <Logo/>
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          {isLoading && 
          (
            <Spinner/>
          )}
          {!isAuthenticated && !isLoading && 
          (
            <>
            <SignInButton mode='modal'>
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size="sm">
                Get Passion
              </Button>
            </SignInButton></>
          )}
          {isAuthenticated && !isLoading && (
            <>
            <Button variant="ghost" size={"sm"} asChild>
              <Link href="/documents">
                Into Passion
              </Link>
            </Button>
            <UserButton   afterSignOutUrl='/'/>
            </>
          )}
            <ModeToggle/>

        </div>
    </nav>
  )
}

export default NavBar;