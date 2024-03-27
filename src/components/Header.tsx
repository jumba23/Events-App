import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          <li>
            <Link href="/events/austin">Austin</Link>
          </li>
          <li>
            <Link href="/events/seattle">Seattle</Link>
          </li>
        </ul>
      </nav>
      <Link href="/">Home</Link>
      <Link href="/events/all">All Events</Link>
    </header>
  );
};

export default Header;
