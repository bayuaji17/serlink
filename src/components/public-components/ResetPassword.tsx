"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { resetPasswordSchema } from "@/lib/schema-validation";


export default function ResetPassword({ token }: { token: string }) {
  const router = useRouter();
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(formData: z.infer<typeof resetPasswordSchema>) {
    let toastId: string | number | undefined;
    await authClient.resetPassword(
      {
        newPassword: formData.password,
        token,
      },
      {
        onRequest: () => {
          toastId = toast.loading("loading...");
        },
        onSuccess: (ctx) => {
          if (ctx.data.status === true) {
            toast.success("Reset password success", { id: toastId });
            router.push("/signin");
          }
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Something went wrong", {
            id: toastId,
          });
        },
      }
    );
  }
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">
            Let&apos;s Get You a New Password
          </CardTitle>
          <CardDescription className="text-base">
            Enter and confirm your new password below. Make sure it&apos;s
            strong and easy for you to remember.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your new password"
                        type="password"
                        {...field}
                        required
                        aria-required="true"
                        autoComplete="new-password"
                        className="border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your new confirm password"
                        type="password"
                        {...field}
                        required
                        aria-required="true"
                        autoComplete="new-password"
                        className="border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link
            href={"/signin"}
            prefetch
            className="font-semibold hover:underline flex gap-x-2 items-center"
          >
            <ArrowLeft />
            Back to Sign In
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
