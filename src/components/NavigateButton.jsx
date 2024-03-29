import { Link } from "react-router-dom";
export default function NavigateButton() {
  return (
    <Link
      to="/"
      className="absolute -left-12 top-0 hidden  h-11 w-10 rotate-180 place-content-center rounded-md text-lg transition-all hover:scale-110 sm:grid"
    >
      ➜
    </Link>
  );
}
