import { Link } from "react-router-dom";
import InLogo from "../icons/header/logo";
import cn from "classnames";

interface LogoI {
  className?: string;
}

export const Logo = ({ className }: LogoI) => {
  return (
    <Link to={"/"}>
      <span className={cn(className, "text-primary text-[36px]")}>HelpJob</span>
      <InLogo />
    </Link>
  );
};
