import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export default function Home() {
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
            <form>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="login"
                placeholder="login"
              />
              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="password"
                placeholder="password"
              />
              <input
                type="text"
                id="password2"
                class="fadeIn third"
                name="password2"
                placeholder="retype password"
              />
              <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
              <a class="underlineHover" href="/login">
                Login?
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
