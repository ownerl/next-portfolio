import Image from 'next/image'
// import css module
import styles from '@/styles/About.module.css';
// all react hooks are available
import { useState } from 'react';


export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        <>
            <h1 id={styles.aboot}>About Me</h1>
            <p className="fontSize">Abay Rysbek</p>
            <p>Software Engineer with a background in UX/UI & Product Design who is passionate about marrying good design practices with practicality and functionality of well-built systems and software. Currently in pursuit of AI integrations in everyday life to help raise our quality of life.</p>
            <button onClick={() => setFontSize(fontSize + 1)}>bigger</button>
            <button onClick={() => setFontSize(fontSize - 1)}>smaller</button>
            <style jsx>{`
                .fontSize {
                    font-size: ${fontSize}rem;

                }
            `}</style>
            <p className="fontSize">dassdaadsasd</p>
            <hr/>
            <img src='/hackerman.jpeg' alt='pro hacker'></img>
            <Image 
                src="https://placekitten.com/300/300"
                alt="kitten"
                width={300}
                height={300}
            />
        </>
    )
}