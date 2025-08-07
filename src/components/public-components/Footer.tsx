"use client";

import { HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-2 mb-4 border-2 w-full flex justify-center items-center rounded-lg border-black" >
      <span className="flex items-center gap-x-2 uppercase">
        Made with <HeartHandshake /> by Serlink
      </span>
    </footer>
  );
}
