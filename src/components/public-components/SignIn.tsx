"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { SignInSchema } from "@/lib/schema-validation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { AspectRatio } from "../ui/aspect-ratio";
import { SignInSocialButton } from "./auth-button";
import serlink from "../../../public/serlink.svg";
export default function SignIn() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof SignInSchema>) {
    const { email, password } = formData;
    let toastId: string | number | undefined;
    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          toastId = toast.loading("loading...");
        },
        onSuccess: () => {
          toast.success("Sign In Success", { id: toastId });
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Something went wrong", {
            id: toastId,
          });
        },
      }
    );
  }

  async function resetPassword(email: string) {
    if (!email) {
      toast.error(
        "Please enter your email address before requesting a reset link"
      );
      return;
    }
    let toastId: string | number | undefined;
    await authClient.forgetPassword({
      email: email,
      redirectTo: "/reset-password/reset/",
      fetchOptions: {
        onRequest: () => {
          toastId = toast.loading("loading...");
        },
        onSuccess: () => {
          toast.success("Check Your Email", {
            description:
              "If an account with that email exists, we've sent a reset link.",
            id: toastId,
          });
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Something went wrong", {
            id: toastId,
          });
        },
      },
    });
  }
  return (
    <>
      <div className="flex flex-col items-center space-y-4 px-10 justify-center relative">
        <Link href="/">
          <Image
            src={serlink}
            alt="Logo Serlink"
            fetchPriority="high"
            className="w-48 h-auto hover:scale-110 transition-all duration-300"
          />
        </Link>
        <Card className="w-full shadow-none border-none bg-transparent ">
          <CardHeader className="text-center">
            <h1 className="text-5xl font-bold">Welcome Back</h1>
            <p>Enter your email and password to access your account</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          type="email"
                          {...field}
                          required
                          aria-required="true"
                          autoComplete="email"
                          className="border-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                          required
                          aria-required="true"
                          autoComplete="current-password"
                          className="border-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="underline underline-offset-2 text-sm"
                    onClick={() => resetPassword(form.watch("email"))}
                  >
                    Forgot your password ?
                  </button>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 font-semibold">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col mt-2 gap-y-2">
              <SignInSocialButton />
            </div>
            <div className="flex w-full justify-center mt-4 gap-x-2">
              <span>Don&apos;t have an account ?</span>
              <Link
                href={"/signup"}
                prefetch
                className="font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden lg:flex relative overflow-hidden rounded-4xl">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={"/illustration-login.png"}
            alt="Login Illustration"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute object-cover"
          />
        </AspectRatio>
      </div>
    </>
  );
}
