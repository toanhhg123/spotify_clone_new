import React from "react";

import styled from "styled-components";
import { useGlobalContext } from "../contexts/context";
import MusicPlayer from "./MusicPlayer";

const AudioList = ({ childen }) => {
  const { songsList, currentSong, changeFavourite } = useGlobalContext();

  return (
    <Wrapper>
      <h2 className="title">
        The list <span>{songsList.length} songs</span>
      </h2>
      {/* <div className="songs-container" hidden>
        {songsList.map((item, index) => {
          return (
            <SingleSong
              key={item._id}
              currentSong={currentSong}
              changeSong={changeSong}
              changeFavourite={changeFavourite}
              index={index}
              {...item}
            />
          );
        })}
      </div> */}
      <MusicPlayer
        changeFavourite={changeFavourite}
        currentSong={currentSong}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10px 30px;
  .title {
    font-size: 18px;
    color: #f1f1f1;
    span {
      color: #848484;
      font-size: 12px;
    }
  }
  .songs-container {
    height: 220px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  @media screen and (max-width: 550px) {
    .songs-container {
      height: 140px;
    }
  }
`;

export default AudioList;
