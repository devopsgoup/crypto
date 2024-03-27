// components/Header.js
import Link from 'next/link';
import Image from "next/image";
import styles from './styles/Header.module.css'; // Importation du fichier CSS

const Header = () => {
  return (
    <header className={styles.header}> {/* Appliquer la classe CSS définie */}
      <div className={styles.logo}>
        {/* logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            width={150}
            height={0}
          />
        </Link>
      </div>
      <nav>
        {/* navigation menu */}
        <ul className={styles.navLinks}> {/* Ajouter une classe à la balise <ul> */}
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
