import styles from "@/styles/Home.module.css";

export default function Projects() {
    return (
        <>
            <section
                id="projects"
                className={`${styles.section} ${styles.projects}`}
            >
                <h1>Projects</h1>
                <div id="project1" className={`${styles.projectItem}`}>
                    <h2>Master Hand</h2>
                    <p>A demonstration of computer vision hand tracking used to navigate a 3d environment and access information and links. The closed fist gesture 
                        acts as a click, allowing you to click and drag the environment to rotate it, as well as click on embedded 3d objects that take you to various links.
                    </p>
                    <div className={`${styles.projectImage}`}></div>
                </div>
                <div id="project2" className={`${styles.projectItem}`}>
                    <h2>Project 2</h2>
                    <p>Description of project 2...</p>
                    <div className={`${styles.projectImage}`}></div>
                </div>
                <div className={`${styles.projectItem}`}>
                    <h2>Project 3</h2>
                    <p>Description of project 3...</p>
                    <div className={`${styles.projectImage}`}></div>
                </div>
            </section>
        </>
    );
}
