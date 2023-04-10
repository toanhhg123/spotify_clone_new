import React from "react";
import styled from "styled-components";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { combieFile } from "../utils";

const SingleSong = ({
  _id,
  index,
  favourite,
  title,
  singer,
  currentSong,
  image,
  changeFavourite,
  changeSong,
  likes,
}) => {
  return (
    <Wrapper>
      {/* add active class if _id of song equals current song _id in state then add active class */}
      <div
        onClick={() => changeSong(_id)}
        className={_id === currentSong._id ? "songs active" : "songs"}
      >
        <div className="count">#{index + 1}</div>
        <div className="song">
          <div className="img-container">
            <img src={combieFile("img", image)} alt={singer} />
          </div>
          <div className="song-info">
            <p className="song-name">
              {title}
              <span>{singer}</span>
            </p>
            <div className="hits">
              <p className="hit">
                <i>
                  <FaHeadphones />
                </i>
                {likes?.length}
              </p>
              <p className="duration">
                <i>
                  <FaRegClock />
                </i>
                03.04
              </p>
              <div onClick={() => changeFavourite(_id)} className="favourite">
                {/* if favourite show full heart if not show empty heart */}
                {favourite ? (
                  <i>
                    <FaHeart />
                  </i>
                ) : (
                  <i>
                    <FaRegHeart />
                  </i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .songs {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #848484;
    width: 100%;
    margin: 10px 0;
    padding: 5px;
    cursor: pointer;
    /* padding-bottom: ; */
    .count {
      margin-right: 10px;
    }
    .song {
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 6px;
      .img-container {
        width: 45px;
        height: 45px;
        min-width: 45px;
        border-radius: 0.5em;
        background: #555;
        margin-right: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .song-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .song-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          width: 50%;
        }
        .hits {
          display: flex;
          justify-content: space-between;
          align-items: center;
          /* width: 60px; */
          p {
            display: flex;
            margin-right: 10px;
          }
          i {
            font-size: 12px;
            margin-right: 6px;
            display: grid;
            place-items: center;
          }
          .favourite {
            display: flex;
            i {
              color: #49e12e;
              filter: drop-shadow(0px 0px 4px #49e12e);
            }
          }
        }
      }
    }
  }
  .songs:hover,
  .songs.active {
    color: #f1f1f1;
    transition: 0.3s;
  }
  @media screen and (max-width: 950px) {
    .songs {
      .song {
        .song-info {
          .song-name {
            display: block;
            font-size: 12px;
            text-align: center;
            span {
              display: none;
            }
          }
          .hits {
            .hit {
              display: none;
            }
          }
        }
      }
    }
  }
`;

export default SingleSong;
