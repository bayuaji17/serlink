"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SignUpSchema } from "@/lib/schema-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { authClient } from "@/lib/auth-client";
import { AspectRatio } from "../ui/aspect-ratio";
import serlink from "../../../public/serlink.svg";
import illustrationRegister from "../../../public/illustration-register.png";
import { SignInSocialButton } from "./auth-button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof SignUpSchema>) {
    const { name, email, password } = formData;
    let toastId: string | number | undefined;
    await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => {
          toastId = toast.loading("loading...");
        },
        onSuccess: (ctx) => {
          if (ctx.data?.user?.emailVerified === false) {
            toast.success("Welcome to Serlink!", {
              description:
                "We've emailed you a verification link — please confirm your email to get started",
              id: toastId,
            });
          } else {
            toast.success("Sign Up Success", { id: toastId });
          }
          router.push("/signin");
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
      <div className="flex flex-col items-center space-y-4 justify-center relative">
        <Card className="w-full shadow-none border-none order-last bg-transparent">
          <CardHeader className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-2 p-2">
              <span className="text-2xl font-bold">
                Your Identity, Streamlined by{" "}
              </span>
              <Link href="/">
                <Image
                  src={serlink}
                  alt="Logo Serlink"
                  fetchPriority="high"
                  className="w-32 h-auto hover:scale-110 transition-all duration-300"
                />
              </Link>
            </div>
            <p>
              Create your account and enjoy exclusive features, early access,
              and more.
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          type="text"
                          {...field}
                          required
                          aria-required="true"
                          className="border-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your confirm password"
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
                  Sign Up
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
              <span>Already Have an account ?</span>
              <Link
                href={"/signin"}
                prefetch
                className="font-semibold hover:underline"
              >
                Sign in now
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden lg:flex relative overflow-hidden rounded-4xl order-first">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={illustrationRegister}
            alt="Illustration Register"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute object-cover"
          />
        </AspectRatio>
      </div>
    </>
  );
}
