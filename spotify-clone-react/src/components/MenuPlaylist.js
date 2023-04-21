import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import playlist from "../assets/playlist";
const MenuPlaylist = () => {
  return (
    <Wrapper className="menu-playlist">
      <div className="name-container">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playList-scroll">
        {playlist.map((item) => {
          const { id, name } = item;
          return (
            <div key={id} className="playlist">
              <i>
                <BsMusicNoteList />
              </i>
              <p>{name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 15px 0;
  .name-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #848484;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }
  i {
    cursor: pointer;
  }
  .playList-scroll {
    height: 140px;
    /* background: purple; */
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
  }
  .playlist {
    cursor: pointer;
    display: grid;
    color: #848484;
    grid-template-columns: 20px 1fr 20px;
    margin-bottom: 10px;
    p {
      padding-left: 10px;
    }
    :hover {
      color: #f1f1f1;
      transition: 0.3s;
    }
  }
  .trash {
    cursor: pointer;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export default MenuPlaylist;
