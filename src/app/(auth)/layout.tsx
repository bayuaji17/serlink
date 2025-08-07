export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen bg-background gap-x-4 font-sans">
      {children}
    </div>
  );
}
