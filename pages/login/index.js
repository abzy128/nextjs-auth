import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export default function Home() {
  async function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then((t) => t.json());
    alert(response.text);
  }
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Auth demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <Image
                src="/next.svg"
                id="icon"
                alt="User Icon"
                width={128}
                height={128}
              />
            </div>

            <form onSubmit={login}>
              <input
                type="email"
                id="email"
                className="fadeIn second"
                name="email"
                placeholder="email"
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
              />
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
              <Link className="underlineHover" href="/register">
                Register?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
