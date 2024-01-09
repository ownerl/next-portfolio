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
                        <div className={`${styles.leftside}`}>
                            <h2>Master Hand</h2>
                            <span className={styles.links}>
                            </span>
                            <div className={`${styles.handvideocontainer}`}>                               
                                <iframe
                                width="600"
                                height="840"
                                src="https://www.youtube.com/embed/H9L2ZuoVmtI"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                className={`${styles.handvideo}`}
                                ></iframe>
                            </div>
                            
                        </div>
                        <div className={`${styles.rightside}`}>
                            
                            <p>
                                A demonstration of computer vision hand tracking
                                used to navigate a 3d environment and access
                                information and links. The closed fist gesture
                                acts as a click, allowing you to click and drag
                                the environment to rotate it, as well as click
                                on embedded 3d objects to take you to various
                                links.
                            </p>
                        </div>

                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
                <section id="project2" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <h2>Dungeon Buddy</h2>
                        <p>Dungeon Buddy is a complementary web-app for dunegon masters to help plan out and keep track of their campaigns. Users can create campaigns, locations within them, and assign monster encounters to those locations. Utilizing the Open5e API, users can quickly add monsters to their locations and view indepth information on them through a provided link.</p>
                        
                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
                <section id="project3" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <h2>Escape the Forest</h2>
                        <p>Description of project 2...</p>
                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
                <section id="project4" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <h2>LessonLoom</h2>
                        <p>Description of project 2...</p>
                        <div className={`${styles.projectImage}`}></div>
                    </div>
                </section>
            </section>
        </>
    );
}
