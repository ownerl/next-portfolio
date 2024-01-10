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
                    className={`${styles.intro}`}
                >
                    <h1 className={styles.name}>ABAY<br />RYSBEK.</h1>
                    <p className={styles.welcome}>
                        My name is Abay Rysbek, and I&apos;m a software
                        engineer/designer based in Edmonton, Canada.
                        I am experienced in developing full stack applications
                        using the MERN stack as well as Python and Django.
                        I love putting on many hats and exploring what is
                        possible.
                        Thank you for visiting my web portfolio and I hope you
                        find my projects interesting!
                    </p>
                </section>
                <h1 style={{textAlign: 'left', marginTop: '0'}}>Projects<hr style={{height: '3px', backgroundColor: 'black', borderWidth: 0}} />
</h1>
                <div className={styles.images} id="projects">
                    <a href="#masterhand">
                        <Image
                            src={"/images/hand.PNG"}
                            width={230}
                            height={230}
                            className={styles.hand}
                            title="Master Hand"
                            alt="drawn hand arrow"
                        />
                    </a>
                    <a href="#dungeonbuddy">
                        <Image
                            src={"/images/d20.PNG"}
                            width={200}
                            height={200}
                            className={styles.d20}
                            title="Dungeon Buddy"
                            alt="drawn d20 die"
                        />
                    </a>
                    <a href="#escape">
                        <Image
                            src={"/images/Tree.png"}
                            width={160}
                            height={250}
                            className={styles.tree}
                            title="Escape the Forest"
                            alt="drawn tree"
                        />
                    </a>
                    <a href="#lessonloom">
                        <Image
                            src={"/images/loom.png"}
                            width={200}
                            height={200}
                            className={styles.loom}
                            title="LessonLoom"
                            alt="lesson loom logo"
                        />
                    </a>
                </div>
                <Projects />
            </main>
        </>
    );
}
