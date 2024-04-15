import { ReactNode } from "react";
import Header from "../Header/ui/Header";
import { Footer } from "./Footer/ui/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
