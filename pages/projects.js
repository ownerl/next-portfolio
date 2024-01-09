import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function Projects() {
    return (
        <>
            <section
                id="projects"
                className={`${styles.section} ${styles.projects}`}
            >
                <h1>Projects</h1>
                <section id="project1" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <h2>Master Hand</h2>
                        <span className={styles.links} ><a href="https://github.com/ownerl/master-hand" target="_blank">
                            <Image 
                            src={'/github-mark.svg'}
                            width={30}
                            height={30}
                        />
                        </a></span>
                        <p>
                            A demonstration of computer vision hand tracking
                            used to navigate a 3d environment and access
                            information and links. The closed fist gesture acts
                            as a click, allowing you to click and drag the
                            environment to rotate it, as well as click on
                            embedded 3d objects to take you to various links.
                        </p>
                        
                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
                <section id="project2" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <h2>Project 2</h2>
                        <p>Description of project 2...</p>
                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
                <section id="project3" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <h2>Project 2</h2>
                        <p>Description of project 2...</p>
                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
                
            </section>
        </>
    );
}
