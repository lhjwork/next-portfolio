interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>레이마웃</h1>
      <div>{children}</div>
    </>
  );
}
