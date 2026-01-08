"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpenIcon, MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLink from "./NavLink";
import Image from "next/image";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Study Wager", href: "/study-wager" },
  { name: "Live Tutoring", href: "/live-tutoring" },
  { name: "Smart Notes", href: "/smart-notes" },
  { name: "Analytics", href: "/analytics" },
  { name: "Mental Warfare", href: "/mental-warfare" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className=" sticky top-0 z-50 bg-white bg-gradient-to-r from-[#0F93FF1A] to-[#5C3BED1A] ">
      <div className="border-b">
        <div className="max-w-[1430px] mx-auto px-5 ">
          <div className="flex h-20 md:h-28 items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link, index) => (
                <NavLink href={link.href} key={index}>
                  {" "}
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <Button variant={"outline"}>Login</Button>
              <Button className="group">Sign Up</Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <MenuIcon className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className=" w-[280px] px-4 [&>button]:hidden"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 relative">
                    <Logo />
                  </SheetTitle>
                  <Button
                    variant={"outline"}
                    size={"icon-sm"}
                    onClick={() => setIsOpen(false)}
                    className="absolute -right-4 top-5 rounded-md p-2 hover:bg-muted rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <NavLink href={link.href} key={index}>
                      {" "}
                      {link.name}
                    </NavLink>
                  ))}
                </div>
                <SheetFooter>
                  <Button variant={"outline"}>Login</Button>
                  <Button>Sign Up</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
