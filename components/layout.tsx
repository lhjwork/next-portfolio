import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <h1>레이아웃</h1>
      <div>{children}</div>
      <Footer />
    </>
  );
}
