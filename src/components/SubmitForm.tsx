"use client";

import { useState, type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  successMessage?: string;
};

/** Front-end only form: blocks the page reload and shows a thank-you note. Wire it to an API route or email service later. */
export default function SubmitForm({ className, children, successMessage = "Thanks! We'll be in touch soon." }: Props) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
      }}
    >
      {children}
      {sent && (
        <p role="status" className="text-sm font-bold uppercase tracking-[0.2em] text-center">
          {successMessage}
        </p>
      )}
    </form>
  );
}
