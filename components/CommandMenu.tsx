"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { menuItems } from "@/data/fakedata";
import { CommandItems } from "@/data/fakedata";

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
         <div className="command-dialog">

        
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            
          {CommandItems.map((item) => (
            <CommandItem
              key={item.slug}
              onSelect={() => {
                if (item.slug) window.location.href = item.slug;
                // setOpenCommand(false);
              }}
            >
              {item.name}
            </CommandItem>
          ))}
          </CommandGroup>

          <div className="h-px my-2 bg-black dark:bg-white" />


          <CommandGroup heading="Menu">
          {menuItems.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => {
                if (item.href) window.location.href = item.href;
              }}
            >
              {item.name}
            </CommandItem>
          ))}
          </CommandGroup>
        </CommandList>
      </Command>
      </div>
    </CommandDialog>
  );
}
