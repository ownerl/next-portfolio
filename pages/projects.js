import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function Projects() {
    return (
        <>
            <section
                id="projects"
                className={`${styles.section} ${styles.projects}`}
            >
                <section id="masterhand" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <div className={`${styles.leftside}`}>
                            <h2>Master Hand</h2>
                            <span className={styles.links}></span>
                            <div className={`${styles.handvideocontainer}`}>
                                <iframe
                                    width="720"
                                    height="840"
                                    src="https://www.youtube.com/embed/H9L2ZuoVmtI"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                    className={`${styles.handvideo}`}
                                    style={{ borderRadius: "10px" }}
                                ></iframe>
                            </div>
                        </div>
                        <div className={`${styles.rightside}`}>
                            <div>
                                <h3>
                                    <a
                                        href="https://github.com/ownerl/master-hand"
                                        target="_blank"
                                    >
                                        github
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://master-hand-c1acb1d92ae5.herokuapp.com/"
                                        target="_blank"
                                    >
                                        live
                                    </a>
                                </h3>
                                <p>
                                    A demonstration of computer vision hand
                                    tracking used to navigate a 3d environment
                                    and access information and links. The closed
                                    fist gesture acts as a click, allowing you
                                    to click and drag the environment to rotate
                                    it, as well as click on embedded 3d objects
                                    to take you to various links.
                                </p>
                                <h4>Tools Used:</h4>
                                <ul className={`${styles.stack}`}>
                                    <li>HTML</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Three.js</li>
                                    <li>TensorFlow.js</li>
                                    <li>MediaPipe</li>
                                    <li>Framer Motion</li>
                                    <li>React Webcam</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="dungeonbuddy" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <div className={`${styles.leftside}`}>
                            <h2>Dungeon Buddy</h2>
                            <Image
                                src={"/images/dungeonbuddy.png"}
                                width={720}
                                height={480}
                                className={styles.dungeonbuddy}
                                title="Dungeon Buddy"
                                alt="dungeon buddy app screenshot"
                            />
                        </div>
                        <div className={`${styles.rightside}`}>
                            <div>
                                <h3>
                                    <a
                                        href="https://github.com/ownerl/dungeon-buddy"
                                        target="_blank"
                                    >
                                        github
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://dungeon-buddy-ar-cd4d1e34fd17.herokuapp.com/"
                                        target="_blank"
                                    >
                                        live
                                    </a>
                                </h3>
                                <p>
                                    Dungeon Buddy is a complementary web-app for
                                    dunegon masters to help plan out and keep
                                    track of their campaigns. Users can create
                                    campaigns, locations within them, and assign
                                    monster encounters to those locations.
                                    Utilizing the Open5e API, users can quickly
                                    add monsters to their locations and view
                                    indepth information on them through a
                                    provided link.
                                </p>
                                <h4>Tools Used:</h4>
                                <ul className={`${styles.stack}`}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Bootstrap</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Passport.js</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>Open5e API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="escape" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <div className={`${styles.leftside}`}>
                            <h2>Escape the Forest</h2>
                            <Image
                                src={"/images/escape.png"}
                                width={720}
                                height={480}
                                className={styles.dungeonbuddy}
                                title="Escape the Forest"
                                alt="escape the forest app screenshot"
                            />
                        </div>
                        <div className={`${styles.rightside}`}>
                            <div>
                                <h3>
                                    <a
                                        href="https://github.com/ownerl/Escape-The-Forest"
                                        target="_blank"
                                    >
                                        github
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://ownerl.github.io/Escape-The-Forest/"
                                        target="_blank"
                                    >
                                        live
                                    </a>
                                </h3>
                                <p>
                                    Escape The Forest is a top down 2D exploration and escape game made using vanilla Javascript classes and HTML Canvas.
                                    The player must explore the map to find a key that opens an escape hatch somewhere in the playable area. The player also has 
                                    a lantern that lights their surrounds but also attracts an enemy character. Trees in the environment slow down the player. The game environment 
                                    is randomly generated every time.
                                </p>
                                <h4>Tools Used:</h4>
                                <ul className={`${styles.stack}`}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="lessonloom" className={`${styles.projects}`}>
                    <div className={`${styles.projectItem}`}>
                        <div className={`${styles.leftside}`}>
                            <h2>LessonLoom</h2>
                            <Image
                                src={"/images/lessonloom.png"}
                                width={720}
                                height={480}
                                className={styles.dungeonbuddy}
                                title="LessonLoom"
                                alt="lessonloom app screenshot"
                            />
                        </div>
                        <div className={`${styles.rightside}`}>
                            <div>
                                <h3>
                                    <a
                                        href="https://github.com/ownerl/LessonLoom"
                                        target="_blank"
                                    >
                                        github
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://lessonloooom-066f39f355bd.herokuapp.com/courses"
                                        target="_blank"
                                    >
                                        live
                                    </a>
                                </h3>
                                <p>
                                    LessonLoom is a MERN stack application designed as a platform for students and educators to plan and consume curated video lessons. 
                                    Lessons can be arranged as a series of YouTube videos from one or more creators, which can then be viewed by anyone. This project was made 
                                    in collaboration with Carl Damey and Morgan Selbekk.
                                </p>
                                <h4>Tools Used:</h4>
                                <ul className={`${styles.stack}`}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>Google API</li>
                                    <li>YouTube API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
