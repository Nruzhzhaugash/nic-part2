import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-[60px]">
      <Link
        to={""}
        className="text-primary uppercase font-custom text-[20px] font-semibold"
      >
        About Us
      </Link>
      <Link
        to={""}
        className="text-primary uppercase font-custom text-[20px] font-semibold"
      >
        my CVs
      </Link>
      <Link
        to={""}
        className="text-primary uppercase font-custom text-[20px] font-semibold"
      >
        responses
      </Link>
      <Link
        to={""}
        className="text-primary uppercase font-custom text-[20px] font-semibold"
      >
        Help
      </Link>
    </nav>
  );
}
