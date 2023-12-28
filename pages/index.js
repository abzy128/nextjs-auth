import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export default function Home() {
  async function checkDatabase(e) {
    e.preventDefault();
    const response = await fetch("/api/health");
    const data = await response.json();
    alert(data);
  }
  return (
    <>
      <Head>
        <title>Auth demo</title>
        <meta name="description" content="Auth demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1 className={styles.title}>Hello to auth app</h1>
          <Link href={"/login"}><button className="btn btn-primary">Login</button></Link>
          <Link href={"/register"}><button className="btn btn-primary">Register</button></Link>
          <button className="btn btn-primary" onClick={checkDatabase}>Check Database</button>
        </div>
      </main>
    </>
  );
}
