import styles from "@/styles/Home.module.css";
import { useState } from 'react';


export default function Navbar() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    return (
        <nav className={`${styles.nav}`}>
            <a href="#" className={`${styles.logo}`}>
                Abay Rysbek
            </a>
            <ul>
                {/* <li>
                    <a href="#about">About</a>
                </li> */}
                <li className={`${styles.dropdown}`}>
                    <a href="#projects">Projects</a>
                    <ul className={`${styles.dropdowncontent}`}>
                        <li><a href="#project1">Master Hand</a></li>
                        <li><a href="#project2">LessonLoom</a></li>
                        {/* Add more projects here */}
                    </ul>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
}
