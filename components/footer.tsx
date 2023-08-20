import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px4 text-center text-gray-500 ">
      <small className="mb-2 text-xs block">
        &copy; 2023 Echo Wang. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          Built with React & Next.js (App Router & Server Actions), TypeScript,
          Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting
        </span>
      </p>
    </footer>
  );
}
