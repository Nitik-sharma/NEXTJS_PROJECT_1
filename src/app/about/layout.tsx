export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className=" text-6xl text-center">Inner Navbar</h1>
      {children}
    </>
  );
}
