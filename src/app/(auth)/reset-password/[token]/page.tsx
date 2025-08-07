import ResetPassword from "@/components/public-components/ResetPassword";

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token = "" } = await searchParams;

  return (
    <div className="col-span-2 self-center place-self-center w-4xl">
      <ResetPassword token={token as string} />
    </div>
  );
}
