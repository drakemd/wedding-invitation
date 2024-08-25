"use client";

import Frame from "../__components/frame";

export default function Maps() {
    return (
        <Frame>
            <div className="flex flex-1 items-center justify-center">
                <iframe
                    width="250"
                    height="450"
                    loading="lazy"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDBqy-WxyPQD5JtfG8mHHMOo1c1fj5L12I
                        &q=Graha+Intan+Balarea">
                </iframe>
            </div>
        </Frame>
    );
}