import { Navbar } from "@/entities/Navbar";
import Button from "@/shared/ui/Button/Button";
import Location from "@/shared/ui/icons/header/location";
import InLogo from "@/shared/ui/icons/header/logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-7 flex justify-between items-center container">
      <div className="relative flex items-center gap-5">
        <Link to={"/"}>
          <span className="text-primary text-[36px]">HelpJob</span>
          <InLogo />
        </Link>
        <div className="flex items-center cursor-pointer">
          <Location />
          <span className="font-custom text-[20px] underline">Almaty</span>
        </div>
      </div>
      <Navbar />
      <div className="flex items-center gap-3">
        <Button className="font-semibold bg-white text-primary border-primary border-[2px] py-2 px-4 rounded-[5px] border-solid text-[20px] uppercase">
          For employer
        </Button>
        <Button className="font-semibold bg-primary text-[20px] uppercase rounded-[5px] py-2 px-4">
          Login
        </Button>
      </div>
    </header>
  );
}