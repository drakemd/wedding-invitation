"use client";

import { useMusic } from "../__providers/bgmprovider";
import styles from "./music.module.css";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const BGMButton = () => {
    const { isPlaying, toggleMute } = useMusic();

  return (
    <button className={styles.fab} onClick={toggleMute}>
      {!isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
};

export default BGMButton;
