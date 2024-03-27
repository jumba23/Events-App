import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/events/all">All Events</Link>
    </header>
  );
};

export default Header;
