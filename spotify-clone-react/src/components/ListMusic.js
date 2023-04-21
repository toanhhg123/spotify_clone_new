import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { useGlobalContext } from "../contexts/context";

const ListMusic = ({ musics = [] }) => {
  const { setSongsList, setCurrentSong, changePlayState } = useGlobalContext();
  const handlePlayMusic = (music) => {
    setSongsList(musics);
    setCurrentSong(music);
    changePlayState();
  };

  return (
    <ListMusicWraper>
      <thead>
        <tr>
          <th>Stt</th>
          <th>Image</th>
          <th>Title</th>
          <th>Singer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {musics.map((music, index) => (
          <tr key={music._id}>
            <td>{index + 1}</td>
            <td>
              <img
                src={`${process.env.REACT_APP_BASE_API}/img/${music.image}`}
                alt=""
              />
            </td>
            <td>{music.title}</td>
            <td>{music.singer}</td>
            <td className="td__actions">
              <button>
                {music.likes?.length}
                {<AiOutlineHeart />}
              </button>

              <button onClick={() => handlePlayMusic(music)}>
                <AiFillPlayCircle />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </ListMusicWraper>
  );
};

const ListMusicWraper = styled.table`
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  text-align: center;
  padding: 1rem;
  text-align: center;
  thead {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
  td,
  th {
    padding: 5px;
    color: #f1f1f1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    a {
      padding: 5px 10px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      background-color: #2cb557;
      border-radius: 8px;
      font-weight: 600px;
      cursor: pointer;
      margin-right: 0.5rem;
    }

    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: #fff;
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
      margin-right: 0.5rem;
      cursor: pointer;
      i,
      svg {
        font-size: 1.5rem;
        color: #2cb557;
      }
    }
  }
  .td__actions {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
export default ListMusic;
