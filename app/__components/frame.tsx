"use client";

import Image from "next/image";
import styles from './frame.module.css';
import SwipeWrapper from "./swipewrapper";
import BGMButton from "./music";
import BottomNavBar from "./bottomnavbar";
import { usePathname } from "next/navigation";

export default function Frame(props: any) {
    const pathname = usePathname();

    return (
        <SwipeWrapper>
            <div data-testid="frame" className={`flex flex-col h-screen ${styles.cover}`}>
                <Image
                    className={styles.pillarLeft}
                    src="/images/pillar-left.webp"
                    alt="Pillar Left"
                    width={200}
                    height={160}
                    priority
                />
                <Image
                    className={styles.pillarRight}
                    src="/images/pillar-right.webp"
                    alt="Pillar Right"
                    width={200}
                    height={160}
                    priority
                />
                <img
                    className={styles.topFrame}
                    src="/images/tm.webp"
                    alt="Top Frame"
                />
                <img
                    className={styles.bottomFrame}
                    src="/images/bm.webp"
                    alt="Bottom Frame"
                />
                <img
                    className={styles.flowerTopRight}
                    src="/images/flowertopright.webp"
                    alt="Flower Top Right"
                />
                <img
                    className={styles.flowerTopLeft}
                    src="/images/flowertopleft.webp"
                    alt="Flower Top Left"
                />
                <img
                    className={styles.flowerBottomLeft}
                    src="/images/flowerbottomleft.webp"
                    alt="Flower Bottom Left"
                />
                <img
                    className={styles.flowerBottomRight}
                    src="/images/flowerbottomright.webp"
                    alt="Flower Bottom Right"
                />
                {props.children}
                {pathname != '/' && <BGMButton />}
                {pathname != '/' && <BottomNavBar />}
            </div>
        </SwipeWrapper>
    );
}