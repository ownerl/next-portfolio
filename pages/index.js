import Head from "next/head";
import Image from "next/image";
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
                <section
                    id="about"
                    className={`${styles.section} ${styles.about}`}
                >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Welcome!</h1>
                    <p className={styles.welcome}>
                        My name is Abay Rysbek, and I&apos;m a software
                        engineer/designer based in Edmonton, Canada🍁.
                        <br />
                        I am experienced in developing full stack applications
                        using the MERN stack as well as Python and Django.
                        <br />
                        I love putting on many hats and exploring what is
                        possible.
                        <br />
                        <br />
                        Thank you for visiting my web portfolio and I hope you
                        find my projects interesting!
                    </p>
                </section>
                <div className={styles.images}>
                    <a href="#project3">
                        <Image
                            src={"/Tree.png"}
                            width={400}
                            height={700}
                            className={styles.tree}
                            title="Escape the Forest"
                            alt="drawn tree"
                        />
                    </a>
                    <a href="#project2">
                        <Image
                            src={"/d20.png"}
                            width={300}
                            height={300}
                            className={styles.d20}
                            title="Dungeon Buddy"
                            alt="drawn d20 die"
                        />
                    </a>
                    <a href="#project4">
                        <Image
                            src={"/loom.png"}
                            width={400}
                            height={400}
                            className={styles.loom}
                            title="LessonLoom"
                            alt="lesson loom logo"
                        />
                    </a>
                    <a href="#project1">
                        <Image
                            src={"/hand.png"}
                            width={500}
                            height={500}
                            className={styles.hand}
                            title="Master Hand"
                            alt="drawn hand arrow"
                        />
                    </a>
                </div>
                <Projects />
            </main>
        </>
    );
}
