"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        Rental<span className={css.headerSpan}>Car</span>
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link
              href="/"
              aria-label="Home"
              className={pathname === "/" ? css.active : css.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              aria-label="Catalog"
              className={pathname === "/catalog" ? css.active : css.link}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
