import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={css.home}>
      <div className="container">
        <div className={css.contentbox}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <p className={css.description}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link className={css.catalogBtn} href="/catalog">
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
