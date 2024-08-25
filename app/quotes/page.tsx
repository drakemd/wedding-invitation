"use client";

import Frame from "../__components/frame";

export default function Quotes() {
    return (
        <Frame>
            <div className="flex flex-col">
                <div className="flex-1 items-center justify-center">
                    <p className="text-center pl-10 pr-10">
                        If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.
                    </p>
                </div>
            </div>
        </Frame>
    );
}