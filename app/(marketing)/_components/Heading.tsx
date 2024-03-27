"use client";

import { Spinner } from "@/components/spinner";
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowBigRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas,Documents, Plans & Team Unified In One Place. Welcome to{" "}
        <span className="underline">Passion💖</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Passion is the connected workspace where <br /> better, faster and fun
        work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Into <ArrowBigRight /> <span className="underline">Passion</span>
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal"><Button>
          
            Into <ArrowBigRight /> <span className="underline">Passion 💖</span>
        </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
