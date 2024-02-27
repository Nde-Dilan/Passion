"use client"

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react'
import Logo from './Logo';
import { ModeToggle } from '@/components/mode-toggle';

const NavBar = () => {
    const scrolled = useScrollTop();
  return (
    <nav className={cn("z-50 bg-background fixed top-0 items-center w-full p-6 dark:bg-[#1F1F1F]", scrolled && "border-shadow-sm")}>
        <Logo/>
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
            <ModeToggle/>
        </div>
    </nav>
  )
}

export default NavBar;