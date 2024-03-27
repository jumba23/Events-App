"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              className={clsx(
                " hover:text-white relative transition flex items-center",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>

              <div className="bg-accent h-1 w-full absolute bottom-0"></div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
