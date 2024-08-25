"use client";

import Frame from "../__components/frame";
import { AiFillInstagram } from "react-icons/ai";
import { brittany } from "../fonts/fonts";
import styles from "./page.module.css"
import Link from "next/link";


export default function Bride() {
    return (
        <Frame>
            <div className="mt-32 flex flex-col items-center justify-center">
                <div className={styles.bridePicContainer}>
                    <img src="/images/bride.jpeg" alt="groom" className={styles.bridePic} />
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center ${styles.brideDetailContainer}`}>
                <p className={`text-center mt-5 text-xl ${brittany.variable} font-brittany text-primary`}>Tesa Juniangsih</p>
                <a href="https://www.instagram.com/tesajun96" className="z-10" rel="noopener noreferrer" target="_blank">
                    <AiFillInstagram className="text-3xl text-primary mt-5" />
                </a>
            </div>
        </Frame>
    );
}