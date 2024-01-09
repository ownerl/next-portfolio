import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Projects from "./projects";

export default function Home() {
    return (
        <>
            <Head>
                <title>Abay Rysbek</title>
                <meta name="portfolio" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <section id="about" className={`${styles.section} ${styles.about}`}>
                    <h1>Welcome!</h1>
                    <p className={styles.welcome}>My name is Abay Rysbek, and I'm a software engineer/designer based in Edmonton, Canada🍁. 
                      <br />
                      I am experienced in developing full stack applications using the MERN stack as well as Python and Django.
                      <br />
                      I love putting on many hats and exploring what is possible.
                      <br />
                      <br />
                      Thank you for visiting my web portfolio and I hope you find my projects interesting!</p>
                    <div className={`${styles.bannerImage}`}></div>
                </section>

                <Projects />
            </main>
        </>
    );
}
