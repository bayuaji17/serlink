"use client";

import { Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

export default function Navbar() {
  return (
    <nav className="border-2 border-black w-full flex rounded-lg h-16 justify-between items-center px-6 mt-2">
      {/* This is brand logo or text */}
      <h1>Home</h1>
      <div className="flex gap-x-2">
        <div className="flex relative">
          <Input className="border-black pl-9"/>
          <Search className="absolute inset-y-1.5 left-1" />
        </div>
        <ShoppingCart />
      </div>
    </nav>
  );
}
