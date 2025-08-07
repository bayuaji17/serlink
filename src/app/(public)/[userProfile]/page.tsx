import DetailUsers from "@/components/public-components/DetailUsers";

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ userProfile: string }>;
}) {
  const id = await params;

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto">
      <DetailUsers id={id.userProfile} />
    </div>
  );
}
