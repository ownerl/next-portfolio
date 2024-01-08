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
                    <p>I</p>
                    <div className={`${styles.bannerImage}`}></div>
                </section>

                <Projects />
            </main>
        </>
    );
}
