"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandInput } from "@/components/ui/command";

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

  const filteredOptions = typeOptions.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  const toggleType = (label: string) => {
    setSelectedTypes((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="w-72 rounded-xl border shadow-md bg-white">
      <Command>
        <CommandInput
          placeholder="Search types"
          className="border-none focus:outline-none"
          onValueChange={setQuery}
        />
        <section className="p-2">
          <div className="max-h-64 overflow-y-auto border rounded-md border-blue-300">
            {filteredOptions.map(({ label, count }) => (
              <div
                key={label}
                className="flex items-center justify-between px-3 py-2 border-b last:border-b-0 hover:bg-gray-50"
                onClick={() => toggleType(label)}
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedTypes.includes(label)}
                    onCheckedChange={() => toggleType(label)}
                  />
                  <span className="text-sm font-medium">{label}</span>
                </div>
                <span className="text-sm text-muted-foreground">{count}</span>
              </div>
            ))}
          </div>
        </section>
      </Command>
    </div>
  );
}
