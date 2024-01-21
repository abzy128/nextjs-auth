import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["cyrillic-ext"] });
export default function Home() {
  async function register(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
    alert(response.text);
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
            <form onSubmit={register}>
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
              <input
                type="password"
                id="password2"
                className="fadeIn fourth"
                name="password2"
                placeholder="retype password"
              />
              <input type="submit" className="fadeIn fourth" value="Register" />
            </form>

            <div id="formFooter">
              <Link className="underlineHover" href="/login">
                Login?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
