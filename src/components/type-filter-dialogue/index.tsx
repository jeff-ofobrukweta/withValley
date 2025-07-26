"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

type FilterOption = {
  label: string;
  count: number;
};

const typeOptions: FilterOption[] = [
  { label: "Custom messages", count: 36 },
  { label: "Prompt", count: 33 },
  { label: "Regenerated messaging", count: 31 },
  { label: "Human edits", count: 31 },
  { label: "Feedback", count: 31 },
  { label: "Prospect added", count: 31 },
  { label: "Updated datapoint", count: 31 },
];

export default function TypeFilterDialog() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const toggleType = (label: string) => {
    setSelectedTypes((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const filteredOptions = typeOptions.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Command className="rounded-lg w-72 bg-white">
      <CommandInput
        placeholder="Search types..."
        onValueChange={setQuery}
        className="border-none focus:outline-none"
      />
      <CommandList className="max-h-64 overflow-y-auto">
        <CommandEmpty>No matching types found.</CommandEmpty>
        <CommandGroup heading="Message Types">
          {filteredOptions.map(({ label, count }) => (
            <CommandItem
              key={label}
              onSelect={() => toggleType(label)}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={selectedTypes.includes(label)}
                  onCheckedChange={() => toggleType(label)}
                  className="h-4 w-4"
                />
                <span className="text-sm">{label}</span>
              </div>
              <span className="text-sm text-muted-foreground">{count}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
