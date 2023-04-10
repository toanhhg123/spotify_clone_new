import React from "react";
import styled from "styled-components";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import track from "../img/track.png";
import { useGlobalContext } from "../contexts/context";
const TrackList = () => {
  const { currentSong, audioVolume, changeVolume } = useGlobalContext();
  return (
    <Wrapper className="tracklist">
      <div className="top">
        <img src={track} alt="track name" />
        <p>
          {currentSong.title} <span>{currentSong.singer}</span>{" "}
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input onChange={changeVolume} ref={audioVolume} type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  .top {
    display: flex;
    align-items: center;
    img {
      width: 50px !important;
    }
    p {
      margin-left: 10px;
      color: #f1f1f1;
      font-size: 14px;
      span {
        display: block;
        font-size: 12px;
        color: #848484;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    color: #f1f1f1;
    i {
      font-size: 18px;
      color: #848484;
    }
    i:hover {
      color: #f1f1f1;
      transition: 0.3s;
      cursor: pointer;
    }
    input[type="range"] {
      overflow: hidden;
      width: 80px;
      height: 10px;
      -webkit-appearance: none;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      outline: none;
      border-radius: 10px;
      cursor: pointer;
    }
    // Chrome & Safari
    input[type="range"]::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: #49e12e;
      margin-top: -1px;
    }

    input[type="range"]::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      /* height: 100%; */
      width: 10px;
      height: 20px;
      border-radius: 10px;
      border: 2px solid #000;
      margin: -3px 0 0 0;
      background: #f1f1f1;
      border-radius: 5px;
      transition: all 250ms linear;
      box-sizing: border-box;
      box-shadow: -80px 0 0 80px #49e12e;
      cursor: pointer;
    }
  }

  /** FF*/
  input[type="range"]::-moz-range-progress {
    background-color: #49e12e;
  }
  input[type="range"]::-moz-range-track {
    background-color: #848484;
  }
  /* IE*/
  input[type="range"]::-ms-fill-lower {
    background-color: #49e12e;
  }
  input[type="range"]::-ms-fill-upper {
    background-color: #848484;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export default TrackList;
