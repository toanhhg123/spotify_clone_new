import React, { useEffect, useState } from "react";
import { RiPlayListAddLine } from "react-icons/ri";
import styled from "styled-components";
import { BsJournalAlbum } from "react-icons/bs";
import { useGlobalContext } from "../contexts/context";
import AddList from "./AddList";
import { addMusics, getAllAlbum } from "../api";
import { toast } from "react-toastify";

const CardSong = ({ song }) => {
  const { changeSong } = useGlobalContext();
  const [showListAlbum, setShowListAlbum] = useState(false);
  const [albums, setAlbums] = useState([]);

  const handleChangSong = () => {
    changeSong(song._id);
  };
  const handleClickAlbum = () => {
    setShowListAlbum(true);
  };
  const handleSubmitAddToAlbum = (albumId) => {
    toast.promise(addMusics(albumId, { musicId: song._id }), {
      pending: "...loading",
      success: "add music success",
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };
  useEffect(() => {
    if (showListAlbum) getAllAlbum().then(({ data }) => setAlbums(data));
  }, [showListAlbum]);
  return (
    <SongCard className="list-song-card" onClick={handleChangSong}>
      {showListAlbum && albums.length > 0 && (
        <AddList
          list={albums}
          show={showListAlbum}
          onClose={() => setShowListAlbum(false)}
          handleSubmit={handleSubmitAddToAlbum}
        />
      )}

      <img src={`${process.env.REACT_APP_BASE_API}/img/${song.image}`} alt="" />
      <h6>{song.title}</h6>
      <p>{song.singer}</p>
      <div className="lsc__action album" onClick={handleClickAlbum}>
        <BsJournalAlbum />
      </div>
      <div className="lsc__action playlist">
        <RiPlayListAddLine />
      </div>
    </SongCard>
  );
};

const SongCard = styled.div`
  transition: all 0.3s;
  position: relative;
  .lsc__action {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #1ed760;
    border-radius: 50%;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: none;
    animation: fadeIn 0.3s;
    color: #000;
    &.album {
      top: 50%;
      left: 20px;
    }
    &.playlist {
      top: 50%;
      right: 20px;
    }
  }
  &.list-song-card:hover .lsc__action {
    display: flex;
  }
  &.list-song-card:hover {
    background: #282828;
  }

  @keyframes fadeIn {
    0% {
      top: 60%;
    }
  }
`;

export default CardSong;
