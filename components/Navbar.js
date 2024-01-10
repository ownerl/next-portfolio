import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Navbar() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    return (
        <nav className={`${styles.nav}`}>
            <a href="#" className={`${styles.logo}`}>
                Abay Rysbek
            </a>
            <div style={{ display: "inline-flex" }}>
                {" "}
                    <a href="#projects" className={`${styles.resume}`}>Projects</a>
                <div className={`${styles.dropdown}`}>
                    <ul className={`${styles.dropdowncontent}`}>
                        <li>
                            <a href="#project1">Master Hand</a>
                        </li>
                        <li>
                            <a href="#project2">LessonLoom</a>
                        </li>
                    </ul>
                </div>
                <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1kaVFyimwXeR4KSvLUeFDRom4an2KKKav/edit?usp=sharing&ouid=114526311039750834752&rtpof=true&sd=true"
                    className={`${styles.resume}`}
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
