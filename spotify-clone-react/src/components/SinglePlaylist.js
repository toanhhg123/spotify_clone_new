import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SinglePlayList = ({ playlist, handleDelete, handleShareAlbum }) => {
  const { name, musics, _id } = playlist;

  return (
    <>
      <AlbumWrap>
        <td>{name}</td>
        <td>{musics.length}</td>
        <td>
          <Link to={`/playlist/${_id}`}>
            <AiFillEye />
          </Link>
          <button onClick={handleDelete}>
            <BsFillTrashFill />
          </button>
        </td>
      </AlbumWrap>
    </>
  );
};

const AlbumWrap = styled.tr`
  button,
  a {
    padding: 5px 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: #2cb557;
    border-radius: 2px;
    font-weight: 600px;
    cursor: pointer;
    margin-right: 0.5rem;
  }
`;

export default SinglePlayList;
