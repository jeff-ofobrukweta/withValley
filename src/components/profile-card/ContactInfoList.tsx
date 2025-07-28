import React from "react";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

interface ContactInfoListProps {
  contacts: ContactItem[];
}

export default function ContactInfoList({ contacts }: ContactInfoListProps) {
  return (
    <section className="p-6">
      <div className="space-y-4 text-sm">
        {contacts.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground min-w-[100px]">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="flex-1">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
