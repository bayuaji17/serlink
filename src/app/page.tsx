import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-4">
      <Button asChild>
        <Link href={"/signup"}>Signup</Link>
      </Button>
      <Button asChild>
        <Link href={"/signin"}>SignIn</Link>
      </Button>
    </div>
  );
}
