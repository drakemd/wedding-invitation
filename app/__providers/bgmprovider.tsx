"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

const MusicContext = createContext({
    isPlaying: false,
    toggleMute: () => {},
});

export const useMusic = () => {
  return useContext(MusicContext);
};

export const MusicProvider = ({ children }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl>();

  useEffect(() => {
    const backgroundMusic = new Howl({
      src: ['/bgm/bgm.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.5,
    });

    setSound(backgroundMusic);

    return () => {
      backgroundMusic.unload();
    };
  }, []);

  const toggleMute = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMute }}>
      {children}
    </MusicContext.Provider>
  );
};
