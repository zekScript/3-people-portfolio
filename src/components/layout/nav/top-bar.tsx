"use client";
import * as React from "react";
import NavContent from "./nav-content";
import Image from "next/image";
// import { navbar } from "@/obj/obj";

export function TopBar() {
  return (
    // fixed: position
    <div className="fixed left-0 top-0 z-50 w-full mb-12 backdrop-blur-lg bg-black/50">
      <div className="flex h-full w-full items-center">
        {/* <NavContent items={navbar.items}/> */}
        <Image src="/logo.png" width={100} height={100} alt="Logo"></Image>
        <NavContent />
      </div>
    </div>
  );
}
