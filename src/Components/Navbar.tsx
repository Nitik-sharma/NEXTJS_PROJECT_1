"use client";
import React, { useState } from "react";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="All Coures">
          <div className=" flex flex-col items-start space-y-4">
            <HoveredLink href="/coures">All Course</HoveredLink>
            <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
            <HoveredLink href="/web-dev">Advance Composition</HoveredLink>
            <HoveredLink href="/web-dev">Songwriting</HoveredLink>
            <HoveredLink href="/web-dev">Music Production</HoveredLink>
            <HoveredLink href="/web-dev"></HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
