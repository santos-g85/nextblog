"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Input } from "./ui/input";
import { CommandMenu } from "./CommandMenu";
import { useState } from "react";

import { menuItems } from "@/data/fakedata";
import { CommandItems } from "@/data/fakedata";


export const Navbar = () => {
  const pathname = usePathname();
  const blog_name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME;

  const [openCommand, setOpenCommand] = useState(false);

  return (
    <>
      
      <nav className="flex flex-row justify-between items-center ">
      
        <div className="hidden md:flex flex-row items-center">
          <a
            href="/"
            className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight"
          >
            {blog_name}
          </a>
          <div className="ml-10 flex flex-row space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base hover:underline",
                  pathname === item.href && "font-semibold"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify className="w-6 h-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="bg-white text-black dark:bg-[#1f1f1f] dark:text-white">
              <SheetHeader>
                <SheetTitle>{blog_name}</SheetTitle>
                
                <SheetDescription>
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block py-2",
                        pathname === item.href && "font-semibold"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </SheetDescription>
                
                
              </SheetHeader>
            </SheetContent>
           
          </Sheet>
        </div>

        
        <div className="flex items-center gap-3">
          <Input
            type="email"
            placeholder="Search commands..."
            onClick={() => setOpenCommand(true)}
            readOnly
            className="cursor-pointer"
          />
          <ThemeToggle />
        </div>
      </nav>
      <CommandMenu open={openCommand} setOpen={setOpenCommand} />
    </>
  );
};


