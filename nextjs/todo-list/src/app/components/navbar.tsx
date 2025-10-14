"use client";
import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {

    return(
       <main>
        <nav className={styles.navbar}>
      <h1 className={styles.logo}>Meu To-Do App</h1>
      <ul className={styles.links}>
        <li><Link href="/">Início</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
      </ul>
    </nav>
        </main>
    )

}