import React, { useContext, useEffect, useRef, useState } from "react";
import { useUserContext } from "./userContext";
const AppContext = React.createContext();

const initSongs = [{}];
const AppProvider = ({ children }) => {
  const { userToken } = useUserContext();
  const [songsList, setSongsList] = useState(initSongs);
  const [indexOfSong, setIndexOfSong] = useState(0);
  const [currentSong, setCurrentSong] = useState(songsList[indexOfSong]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const audioVolume = useRef();

  const changeSong = (_id) => {
    const index = songsList.findIndex((item) => item._id === _id);

    setCurrentSong(songsList[index]);
    setIndexOfSong(index);
  };
  const changeFavourite = (_id) => {
    const newSongs = songsList.map((song) => {
      if (song._id === _id) {
        return { ...song, favourite: !song.favourite };
      } else {
        return song;
      }
    });
    setSongsList(newSongs);
  };

  const changePlayState = () => {
    if (songsList === initSongs) return;
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changeVolume = () => {
    const convertedVolume = audioVolume.current.value / 100;

    audioPlayer.current.volume = convertedVolume;
  };
  const nextSong = () => {
    if (songsList === initSongs) return;
    let songIndex = 0;
    if (indexOfSong < songsList.length - 1) songIndex = indexOfSong + 1;

    setIndexOfSong(songIndex);
    setCurrentSong(songsList[songIndex]);
    playSong();
  };
  const previousSong = () => {
    if (songsList === initSongs) return;
    let songIndex = songsList.length - 1;
    if (indexOfSong > 0) songIndex = indexOfSong - 1;

    setIndexOfSong(songIndex);
    setCurrentSong(songsList[songIndex]);
    playSong();
  };

  const whilePlaying = () => {
    if (songsList === initSongs) return;

    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changeCurrentTime = () => {
    setCurrentTime(Number(progressBar.current.value));
  };
  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const playSong = () => {
    audioPlayer?.current?.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  useEffect(() => {
    if (songsList === initSongs) return;

    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    currentSong,
    audioPlayer.current?.loadedmetadata,
    audioPlayer.current?.readyState,
    songsList,
  ]);

  const CalculateTime = (num) => {
    const minutes = Math.floor(num / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(num % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  useEffect(() => {
    if (currentTime >= duration && songsList !== initSongs) {
      nextSong();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  useEffect(() => {
    if (isPlaying) {
      playSong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    indexOfSong,
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  useEffect(() => {
    if (currentSong?.isVip && (!userToken || !userToken.isVip)) {
      if (indexOfSong < songsList.length - 1) nextSong();
      else audioPlayer?.current?.pause();
    }
  }, [currentSong?.isVip, indexOfSong, nextSong, songsList.length, userToken]);

  return (
    <AppContext.Provider
      value={{
        songsList,
        currentSong,
        changeSong,
        changeFavourite,
        setCurrentSong,
        isPlaying,
        duration,
        currentTime,
        audioPlayer,
        progressBar,
        animationRef,
        changePlayState,
        changeProgress,
        setDuration,
        CalculateTime,
        audioVolume,
        changeVolume,
        nextSong,
        previousSong,
        setSongsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
