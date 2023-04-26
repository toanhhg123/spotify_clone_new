import React, { useState } from "react";
import styled from "styled-components";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import MenuList from "./MenuList";
import menuData from "../assets/menuData";
import MenuPlaylist from "./MenuPlaylist";
import TrackList from "./TrackList";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const LeftMenu = () => {
  const [search, setSearch] = useState("");
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    navigate("/?search=" + search);
  };
  return (
    <Wrapper className="left-menu">
      <div className="logo-container">
        <i>
          <FaSpotify />
        </i>
        <h2>Musics</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <form onSubmit={handleSubmitSearch} className="search-box">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <i>
          <BiSearchAlt />
        </i>
      </form>
      {/* make it reusable component since we will need it in the future */}
      <MenuList title={"menu"} objectList={menuData} />

      {/* PlayList */}
      {token && <MenuPlaylist />}
      {/* TrackList */}
      <TrackList />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 280px;
  height: 100%;
  min-height: 100vh;
  background: rgba(34, 34, 34, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px 15px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.27);
  flex-shrink: 0;
  .logo-container {
    color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      font-size: 30px;
    }
    i:nth-child(3) {
      font-size: 20px;
    }
    h2 {
      font-size: 20px;
    }
  }
  .search-box {
    width: 100%;
    height: 45px;
    /* background: coral; */
    position: relative;
    margin-top: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    input {
      width: 100%;
      height: 100%;
      padding-left: 45px;
      outline: none;
      border: none;
      background: rgba(0, 0, 0, 0.5);
      color: #f1f1f1;
      font-size: 14px;
      font-weight: bold;
    }
    i {
      position: absolute;
      font-size: 20px;
      top: 0;
      left: 0;
      width: 45px;
      height: 45px;
      line-height: 45px;
      /* background: #555; */
      text-align: center;
      /* transform: translateY(50%); */
      color: #848484;
    }
  }
  @media screen and (max-width: 950px) {
    width: 64px;
    .search-box {
      display: none;
    }
    .logo-container h2 {
      margin-left: 20px;
    }
  }
`;

export default LeftMenu;
