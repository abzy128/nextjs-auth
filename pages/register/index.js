import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["cyrillic-ext"] });
export default function Home() {
  function register(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }
    const response = fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = response.json();
    alert(data);
  }
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Auth demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <Image
                src="/next.svg"
                id="icon"
                alt="User Icon"
                width={128}
                height={128}
              />
            </div>
            <form onSubmit={register}>
              <input
                type="email"
                id="email"
                class="fadeIn second"
                name="email"
                placeholder="email"
              />
              <input
                type="password"
                id="password"
                class="fadeIn third"
                name="password"
                placeholder="password"
              />
              <input
                type="password"
                id="password2"
                class="fadeIn fourth"
                name="password2"
                placeholder="retype password"
              />
              <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
              <Link class="underlineHover" href="/login">
                Login?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
