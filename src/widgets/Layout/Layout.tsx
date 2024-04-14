import { ReactNode } from "react";
import Header from "../Header/ui/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <footer></footer>
    </>
  );
};
