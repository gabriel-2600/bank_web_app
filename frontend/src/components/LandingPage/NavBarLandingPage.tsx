import { Link } from "react-router";

function NavBarLandingPage() {
  return (
    <nav
      className="mt-8 flex w-full justify-center"
      aria-label="Landing navigation"
    >
      <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-1.5 shadow-sm">
        <Link
          to="/"
          className="rounded-full bg-[#8494FF] px-5 py-2.5 text-sm font-semibold text-white transition-[filter] hover:brightness-105"
        >
          Home
        </Link>
        <Link
          to="/register"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-[filter] hover:bg-black/5"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-black/5"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBarLandingPage;
