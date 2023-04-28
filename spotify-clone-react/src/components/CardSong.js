import React, { useEffect, useState } from "react";
import { RiPlayListAddLine } from "react-icons/ri";
import styled from "styled-components";
import { BsJournalAlbum } from "react-icons/bs";
import { useGlobalContext } from "../contexts/context";
import AddList from "./AddList";
import {
  addMusicToPlaylist,
  addMusics,
  getAllAlbum,
  getAllPlayList,
} from "../api";
import { toast } from "react-toastify";

const CardSong = ({ song }) => {
  const { changeSong } = useGlobalContext();
  const [showListAlbum, setShowListAlbum] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [showModalPlaylist, setShowmodalPlaylist] = useState(false);

  const handleChangSong = () => {
    changeSong(song._id);
  };
  const handleClickAlbum = () => {
    setShowListAlbum(true);
  };
  const handleAddMusicToPlaylist = (playlistid) => {
    toast.promise(addMusicToPlaylist(playlistid, { musicId: song._id }), {
      pending: "...loading",
      success: "add music success",
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
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
    if (showListAlbum)
      getAllAlbum()
        .then(({ data }) => setAlbums(data))
        .catch((e) => toast.error(e.message));
    if (showModalPlaylist) {
      getAllPlayList()
        .then(({ data }) => setPlaylist(data))
        .catch((e) => toast.error(e.message));
    }
  }, [showListAlbum, showModalPlaylist]);
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

      {showModalPlaylist && playlist.length > 0 && (
        <AddList
          list={playlist}
          show={showModalPlaylist}
          onClose={() => setShowmodalPlaylist(false)}
          handleSubmit={handleAddMusicToPlaylist}
        />
      )}
      {song.isVip && <div className="vip__tag">Vip</div>}

      <img src={`${process.env.REACT_APP_BASE_API}/img/${song.image}`} alt="" />
      <h6>{song.title}</h6>
      <p>{song.singer}</p>
      <div className="lsc__action album" onClick={handleClickAlbum}>
        <BsJournalAlbum />
      </div>
      <div
        className="lsc__action playlist"
        onClick={() => setShowmodalPlaylist(true)}
      >
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

  .vip__tag {
    background-color: #1ed760;
    padding: 5px;
    font-weight: 600;
    border-radius: 3px;
    width: max-content;
    position: absolute;
    right: 5px;
    top: 5px;
  }

  @keyframes fadeIn {
    0% {
      top: 60%;
    }
  }
`;

export default CardSong;
