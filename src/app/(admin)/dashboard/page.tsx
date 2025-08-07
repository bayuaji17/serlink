import { SignOutButton } from "@/components/public-components/auth-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  
  return (
    <div className="">
      <h1>ini dashboard</h1>
      <SignOutButton/>
    </div>
  );
}
