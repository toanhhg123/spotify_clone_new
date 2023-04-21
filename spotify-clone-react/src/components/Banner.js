import React from "react";
import styled from "styled-components";
import artistImg from "../img/artist.jpg";
import checkImg from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
import { useGlobalContext } from "../contexts/context";
const Banner = ({ name = "ha", users = 100 }) => {
  const { changePlayState } = useGlobalContext();

  const handlePlayMusic = () => {
    changePlayState();
  };
  return (
    <Wrapper>
      <img className="banner-img" src={artistImg} alt="artist-img" />
      <div className="content">
        <div className="top">
          <p>
            Home <span>/album</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="name">
              <h2>{name}</h2>
              <img src={checkImg} alt="check" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              {users} <span>user listeners</span>
            </p>
          </div>
          <div className="right">
            {/* eslint-disable-next-line */}
            <a href="#" onClick={handlePlayMusic}>
              Play
            </a>
            {/* eslint-disable-next-line */}
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="bottomLayer"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 300px;
  position: relative;
  .banner-img {
    /* position: absolute;
        z-index: -2; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100);
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #f1f1f1;
    z-index: 3;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #848484;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        span {
          color: #f1f1f1;
        }
      }
    }
    .bottom {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        /* display: flex;
                align-items: center; */
        .name {
          display: flex;
          align-items: center;
          h2 {
            font-size: 50px;
          }
          img {
            width: 30px;
            margin-left: 10px;
          }
        }
        p {
          font-size: 14px;
          i {
            margin-right: 6px;
          }
          span {
            color: #848484;
            margin-left: 5px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          padding: 10px 30px;
          font-size: 18px;
          color: #f1f1f1;
          margin: 0px 15px;
          border-radius: 100vh;
          font-weight: bold;
          text-align: center;
          i {
            margin-right: 10px;
            font-size: 14px;
          }
          :nth-child(1) {
            background: #39aa24;
            margin-left: 0;
          }
          :nth-child(2) {
            background: rgba(0, 0, 0, 0.3);
            margin-right: 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          :hover {
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
  }
  .bottomLayer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  }
  @media screen and (max-width: 550px) {
    .content {
      padding: 10px 15px;
      .top {
        p {
          font-size: 12px;
        }
      }
      .bottom {
        .left {
          p {
            font-size: 12px;
          }
          .name {
            h2 {
              font-size: 25px;
            }
          }
        }
        .right {
          padding: 5px 15px;
          font-size: 12px;
          margin: 0 10px;
          a {
            padding: 10px 15px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export default Banner;
