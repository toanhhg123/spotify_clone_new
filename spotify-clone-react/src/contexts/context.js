import React, { useContext, useState, useRef, useEffect } from "react";
import { getAllSong } from "../api";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [songsList, setSongsList] = useState([{}]);
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
    console.log("next");
    setIndexOfSong((oldIndex) => {
      if (oldIndex >= songsList.length - 1) {
        return 0;
      } else {
        return oldIndex + 1;
      }
    });
    setCurrentSong(songsList[indexOfSong]);
    playSong();
  };
  const previousSong = () => {
    console.log("prev");
    setIndexOfSong((oldIndex) => {
      if (oldIndex <= 1) {
        return 0;
      } else {
        return oldIndex - 1;
      }
    });
    setCurrentSong(songsList[indexOfSong]);
  };

  const whilePlaying = () => {
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
    audioPlayer.current.pause();
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    currentSong,
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const CalculateTime = (num) => {
    const minutes = Math.floor(num / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(num % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  useEffect(() => {
    console.log({ currentTime, duration });
    if (currentTime >= duration) {
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
    getAllSong().then(({ data }) => {
      setSongsList(data);
      setCurrentSong(data[0]);
    });
  }, []);

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
