import Image from "next/image";

// import { Poppins } from "next/font/google"; 



import { cn } from "@/lib/utils";

// const font = Poppins({
//     subsets:['latin'],
//     weight:["400","300"],
// })
import React from 'react'

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x2">
        <Image
        className="cursor-pointer dark:hidden"
        width="40"
        height="40"
        src="/logo 1.svg"
        alt="logo"
        />
        <Image
        className="hidden cursor-pointer dark:block"
        width="40"
        height="40"
        src="/logo-dark.svg"
        alt="logo"
        />
        {/* <p className={cn("font-semibold",font.className)}>Passion</p> */}
    </div>
  )
}

export default Logo;