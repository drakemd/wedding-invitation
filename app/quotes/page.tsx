"use client";

import Frame from "../__components/frame";
import { belleza } from "../fonts/fonts";
import styles from './page.module.css';

export default function Quotes() {
    return (
        <Frame>
            <div className="flex items-center justify-center">
                <div className={`mt-32 ${styles.quotes}`}>
                    <p className={`text-center pl-10 pr-10 ${belleza.variable} font-belleza`}>
                        If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.
                    </p>
                    <p className={`mt-1 text-center pl-10 pr-10 ${belleza.variable} font-belleza`}>
                        - Sun Tzu (The Art of War)
                    </p>
                </div>
            </div>
        </Frame>
    );
}