"use client";

import Frame from "../__components/frame";
import { AiFillInstagram } from "react-icons/ai";
import { brittany } from "../fonts/fonts";
import styles from "./page.module.css"
import Link from "next/link";


export default function Groom() {
    return (
        <Frame>
            <div className="mt-32 flex flex-col items-center justify-center">
                <div className={styles.groomPicContainer}>
                    <img src="/images/groom.jpeg" alt="groom" className={styles.groomPic} />
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center ${styles.groomDetailContainer}`}>
                <p className={`text-center mt-5 text-xl ${brittany.variable} font-brittany text-primary`}>Indraga Martiyana Duha</p>
                <a href="https://www.instagram.com/drakemart9" className="z-10" rel="noopener noreferrer" target="_blank">
                    <AiFillInstagram className="text-3xl text-primary mt-5" />
                </a>
            </div>
        </Frame>
    );
}