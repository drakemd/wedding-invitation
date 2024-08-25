"use client";

import styles from './page.module.css';
import { belleza, brigesta } from "@/app/fonts/fonts";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Frame from "@/app/__components/frame";
import { useRouter } from 'next/navigation';
import { useMusic } from '../__providers/bgmprovider';

export default function Cover() {
    const router = useRouter();
    const urlParams = new URLSearchParams(window.location.search);
    const guestname = urlParams.get('guestname');
    const music = useMusic();

    const onClick = () => {
        document.documentElement.requestFullscreen();
        router.push('/quotes');
        music.toggleMute();
    }

    return (
        <Frame>
            <DotLottiePlayer
                src="https://duendesa.blob.core.windows.net/blob/butterfly1.lottie"
                className={styles.butterfly}
                autoplay
                loop 
                speed={0.5}
            />
            <div className={`flex flex-col pt-20 flex-1 z-10 justify-center items-center ${styles.mainContent}`}>
                <p className={`${brigesta.variable} font-brigesta text-3xl text-primary`}>
                    INDRAGA & TESA
                </p>
                <p className="text-center mt-1 mb-1">SAVE THE DATE</p>
                <p className={`mt-5 mb-5 px-2 py-1 rounded-md ${belleza.variable} font-belleza`}>
                    November, 10th 2024
                </p>
            </div>
            <div className={`flex flex-col flex-none ${belleza.variable} font-belleza pb-20 ${styles.footer}`}>
                <div className={styles.footerContent}>
                    <p className="text-center">Dear <span className="text-primary"><b>{guestname}</b></span>,</p>
                    <p className="text-center">You are invited to our wedding</p>
                </div>
                <div className="flex flex-1 justify-center mt-5 mb-5">
                    <div onClick={onClick} className={`px-5 py-1 cursor-pointer z-10 bg-primary text-white ${belleza.variable} font-belleza rounded-lg ${styles.button}`}>Open Invitation</div>
                </div>
            </div>
        </Frame>
    );
}