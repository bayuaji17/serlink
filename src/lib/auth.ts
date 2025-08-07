import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { admin, openAPI } from "better-auth/plugins";
import { sendMail } from "./email";
import { resetPasswordHTML, verifyEmailHTML } from "./email-template";
import { customSession } from "better-auth/plugins";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: true,
    autoSignIn: true,
    sendResetPassword: async ({ user, url }) => {
      const resetPassword = resetPasswordHTML(url);
      await sendMail({
        to: user.email,
        subject: "Reset Your Password",
        html: resetPassword,
      });
    },
    onPasswordReset: async ({ user }: { user: { email: string } }) => {
      console.log(`Password for user ${user.email} has been reset.`);
    },
    resetPasswordTokenExpiresIn: 3600, // 1 hour
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const verification = verifyEmailHTML(url);
      await sendMail({
        to: user.email,
        subject: "Welcome to Serlink! Please Verify Your Email Address",
        html: verification,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600,
  },
  user: {
    additionalFields: {
      username: {
        type: "string",
      },
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => {
        return {
          name: profile.given_name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  },

  plugins: [
    openAPI(),
    admin(),
    customSession(async ({ user, session }) => {
      return {
        user: {
          ...user,
        },
        session,
      };
    }),
  ],
});
