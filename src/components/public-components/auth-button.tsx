"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export const SignInSocialButton = () => {
  const router = useRouter();

  return (
    <Button
      className="w-full"
      type="button"
      onClick={async () => {
        let toastId: string | number | undefined;
        await authClient.signIn.social({
          provider: "google",
          scopes: ["profile", "email"],
          callbackURL: "/dashboard",
          disableRedirect: true,
          fetchOptions: {
            onRequest: () => {
              toastId = toast.loading("loading...");
            },
            onSuccess: (ctx) => {
              router.push(ctx.data.url);
            },
            onError: (ctx) => {
              toast.error(ctx.error.message || "Something went wrong", {
                id: toastId,
              });
            },
          },
        });
      }}
    >
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
      >
        <path
          d="M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z"
          fill="#fff"
        />
      </svg>
      Continue with Google
    </Button>
  );
};

export const SignOutButton = () => {
  const router = useRouter();
  let toastId: string | number | undefined;
  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onRequest: () => {
              toastId = toast.loading("loading...");
            },
            onSuccess: () => {
              toast.success("Sign Out Success", { id: toastId });
              router.push("/signin");
            },
            onError: (ctx) => {
              toast.error(ctx.error.message || "Something went wrong", {
                id: toastId,
              });
            },
          },
        });
      }}
    >
      Sign Out
    </Button>
  );
};
