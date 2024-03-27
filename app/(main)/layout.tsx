"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

 /* if (isLoading) {
    return (
      <div className=" h-full flex items-center justify-center">
        <Spinner color={"blc"} size={"icon"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }*/

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation/>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
