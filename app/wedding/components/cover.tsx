"use client";

import Image from "next/image";
import styles from './cover.module.css';
import { belleza, brittany } from "@/app/fonts/fonts";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function Cover() {
    return (
        <div data-testid="cover" className={`flex flex-col h-screen ${styles.cover}`}>
            <Image
                className={styles.topSmoke}
                src="/images/topsmokexs.png"
                alt="Blue Smoke"
                width={200}
                height={160}
                priority
            />
            <Image
                className={styles.topFlower}
                src="/images/topflowerxs.png"
                alt="Top Flower"
                width={110}
                height={323}
                priority
            />
            <DotLottiePlayer
                src="https://duendesa.blob.core.windows.net/blob/butterfly1.lottie"
                className={styles.butterfly1}
                autoplay
                loop 
                speed={0.5}
            />
            <DotLottiePlayer
                src="https://duendesa.blob.core.windows.net/blob/butterfly2.lottie"
                className={styles.butterfly2}
                autoplay
                loop 
                speed={0.5}
            />
            <div className={`flex flex-col pt-20 flex-1 z-10 justify-center items-center ${styles.mainContent}`}>
                <p className={`${brittany.variable} font-brittany text-6xl text-primary`}>
                    Indraga
                </p>
                <p className={`${brittany.variable} font-brittany text-5xl text-primary my-8`}>
                    &nbsp;&nbsp;&nbsp;&amp;
                </p>
                <p className={`${brittany.variable} font-brittany text-6xl text-primary`}>
                    Tesa
                </p>
            </div>
            <div className={`flex flex-col flex-none ${belleza.variable} font-belleza pl-10 pb-20 text-primary ${styles.footer}`}>
                <p>You are invited to our wedding</p>
                <p className={`my-1 px-2 py-1 bg-primary text-white rounded-bl-md rounded-tl-md ${belleza.variable} font-belleza`}>
                    21 December 2024
                </p>
                <div className="flex flex-1 justify-center mt-5">
                    <div className={`px-5 py-1 cursor-pointer z-10 bg-secondary text-white ${belleza.variable} font-belleza rounded-lg ${styles.button}`}>Open Invitation</div>
                </div>
            </div>
            <Image
                className={styles.bottomFlower}
                src="/images/bottomflowerxs.png"
                alt="Bottom Flower"
                width={110}
                height={287}
                priority
            />
            <Image
                className={styles.bottomSmoke}
                src="/images/bottomsmokexs.png"
                alt="Blue Smoke"
                width={250}
                height={180}
                priority
            />
        </div>
    );
}