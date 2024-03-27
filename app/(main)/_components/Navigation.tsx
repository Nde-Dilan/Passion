"use client"

import { ChevronsLeft } from "lucide-react";


const Navigation = () => {
  return (
    <>

    <aside
     className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div role="button" className="h-6 w-6 text-muted-foreground">
            <ChevronsLeft className="h-6 w-6"/>
        </div>

    <div className="">
        <p>Action items</p>
    </div>
    <div className="mt-4">
        <p>Documents</p>
    </div>
    {/* <div className="bg-red-600 w-[57px] h-[57px] cursor-ew-resize"></div> */}

    <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"/>

    </aside>

    </>
  )
}

export default Navigation;