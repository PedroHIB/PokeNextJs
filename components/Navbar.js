import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="LogoPokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/" className={styles.link_links}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link_links}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
