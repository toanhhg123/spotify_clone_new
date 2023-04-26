import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaPlay,
  FaPause,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { useGlobalContext } from "../contexts/context";
import { combieFile } from "../utils";
import Cookies from "js-cookie";
import { useUserContext } from "../contexts/userContext";
import { toast } from "react-toastify";
import { changeLove } from "../api";
const MusicPlayer = ({ currentSong }) => {
  const { audioFile, image, singer } = currentSong;
  const { userToken } = useUserContext();
  const [isLoved, setisLoved] = useState(false);
  useEffect(() => {
    if (userToken && currentSong?.likes?.some((x) => x._id === userToken._id))
      setisLoved(true);
    else setisLoved(false);
  }, [currentSong, userToken]);
  const {
    isPlaying,
    duration,
    currentTime,
    audioPlayer,
    progressBar,
    changePlayState,
    CalculateTime,
    changeProgress,
    nextSong,
    previousSong,
  } = useGlobalContext();
  const token = Cookies.get("accessToken");
  const changeLoved = () => {
    toast.promise(changeLove(currentSong._id), {
      pending: "loading...",
      success: {
        render({ data }) {
          setisLoved(!isLoved);
          return "change love success";
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };

  return (
    <Wrapper>
      <div className="song-image">
        <img src={combieFile("img", image)} alt={singer} />
      </div>
      <div className="song-attributes">
        <audio
          ref={audioPlayer}
          src={combieFile("audio", audioFile)}
          preload="metadata"
        />
        <div className="top">
          <div className="left">
            {userToken && (
              <div
                className="favourited"
                onClick={() => {
                  changeLoved();
                }}
              >
                {isLoved ? (
                  <i>
                    <FaHeart />
                  </i>
                ) : (
                  <i>
                    <FaRegHeart />
                  </i>
                )}
              </div>
            )}
            <div className="download">
              <a href={combieFile("audio", audioFile)} download={true}>
                <i>
                  <BsDownload />
                </i>
              </a>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i onClick={previousSong}>
                <FaStepBackward />
              </i>
            </div>
            <div className="playPause" onClick={() => changePlayState()}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i onClick={nextSong}>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="current-time">{CalculateTime(currentTime)}</div>
          <input
            onChange={changeProgress}
            ref={progressBar}
            className="progress-bar"
            type="range"
            defaultValue="0"
          />
          <div className="duration">
            {/* check duration so we wont have NaN displayed in duration */}
            {duration && !isNaN(duration) ? CalculateTime(duration) : "00:00"}
          </div>
        </div>
        <div className="mobile-download">
          {token && (
            <div
              className="favourited"
              onClick={() => {
                changeLoved();
              }}
            >
              {isLoved ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
          )}
          <div className="download">
            <i>
              <BsDownload />
            </i>
          </div>
          <div className="share">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .song-image {
    width: 120px;
    min-width: 120px;
    height: 80px;
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .song-attributes {
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top,
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .left,
      .right,
      .middle {
        color: #595959;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        i {
          margin: 0px 15px;
          font-size: 18px;
        }
      }
    }
    .favourited i {
      color: #49e12e !important;
      filter: drop-shadow(0px 0px 20px #49e12e);
    }
    .top {
      padding-bottom: 10px;
      .middle {
        .back {
          margin-right: 20px;
          i {
            color: #9a9a9a !important;
          }
        }
        .forward {
          margin-left: 20px;
        }
        .back i:nth-child(2),
        .forward i:nth-child(1) {
          color: #9a9a9a !important;
        }
      }
      .playPause {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
      }
    }
    .bottom {
      margin-bottom: 20px;
      padding: 0 15px;
      input[type="range"] {
        overflow: hidden;
        width: 70%;
        -webkit-appearance: none;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
      }
      .current-time,
      .duration {
        color: #f1f1f1;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .mobile-download {
      display: none;
      color: #595959;
      font-size: 16px;
      cursor: pointer;
      align-items: center;
      i {
        margin: 0px 15px;
        font-size: 18px;
      }
    }
  }

  /* Chrome & Safari */
  .bottom {
    // Chrome & Safari
    input[type="range"]::-webkit-slider-runnable-track {
      /* width: var(--played-width); */
      height: 10px;
      border-radius: 10px;
      background: #848484;
    }

    input[type="range"]::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      /* height: 100%; */
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: none;
      margin: -2px 0 0 0;
      background: #f1f1f1;
      border-radius: 5px;
      transition: all 250ms linear;
      box-sizing: border-box;
      box-shadow: -1080px 0 0 1080px #49e12e;
      cursor: pointer;
    }
  }

  .bottom {
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
  }

  @media screen and (max-width: 950px) {
    .song-image {
      width: 70px;
      min-width: 70px;
      height: 70px;
    }
    .song-attributes {
      padding-left: 10px;
      .top {
        .left,
        .middle,
        .bottom {
          i {
            margin: 0px 4px;
            font-size: 15px;
          }
        }
      }

      .bottom {
        padding-left: 0;
      }
    }
  }
  @media screen and (max-width: 470px) {
    .song-attributes {
      .top {
        /* display: grid;
                grid-template-columns: auto; */
        display: block;
        .left,
        .right {
          display: none;
        }
        .middle {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .playPause {
          display: grid;
          place-items: center;
          margin-left: 10px;
        }
      }
      .mobile-download {
        display: flex;
        justify-content: flex-start;
        color: #595959;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        i {
          margin: 0px 15px;
          font-size: 18px;
        }
      }
    }
  }
`;
export default MusicPlayer;
