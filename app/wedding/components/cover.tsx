import Image from "next/image";
import styles from './cover.module.css';
import { brittany } from "@/app/fonts/fonts";

export default function Cover() {
    return (
        <div className="flex justify-center items-center h-screen">
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
                width={140}
                height={323}
                priority
            />
            <div className={`z-10 ${styles.mainContent}`}>
                <div className={`${brittany.variable} font-brittany text-6xl text-primary`}>
                    Indraga
                </div>
                <div className={`${brittany.variable} font-brittany text-5xl text-primary my-5`}>
                    &nbsp;&nbsp;&nbsp;&amp;
                </div>
                <div className={`${brittany.variable} font-brittany text-6xl text-primary`}>
                    Tesa
                </div>
            </div>
            <Image
                className={styles.bottomFlower}
                src="/images/bottomflowerxs.png"
                alt="Bottom Flower"
                width={140}
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