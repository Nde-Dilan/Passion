"use client"

import { Button } from "@/components/ui/button"
import { ArrowBigRight } from "lucide-react"


const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4"><h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas,Documents, Plans & Team Unified In One Place. Welcome to <span className="underline">Passion</span></h1>
    <h3 className="text-base sm:text-xl md:text-2xl font-medium">Passion is the connected workspace where <br/> better, faster and fun work happens.</h3>
    <Button>
        Into <ArrowBigRight/> <span className="underline">Passion</span>
        
    </Button>
    </div>
  )
}

export default Heading