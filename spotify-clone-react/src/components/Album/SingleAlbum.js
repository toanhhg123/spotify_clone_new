import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillShareFill, BsFillTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../Modal";

const SingleAlbum = ({ album, handleDelete, handleShareAlbum }) => {
  const { name, musics, users, _id } = album;
  const [userName, setUserName] = useState("");
  const [showModalShare, setShowModalShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleShareAlbum(userName, _id);
    setShowModalShow(false);
  };

  return (
    <>
      <AlbumWrap>
        <td>
          {name}
          <Modal show={showModalShare} onClose={() => setShowModalShow(false)}>
            <FormShareAlbum onSubmit={handleSubmit}>
              <input
                placeholder="enter username ..."
                onChange={(e) => setUserName(e.target.value)}
              />
              <button>Add</button>
            </FormShareAlbum>
          </Modal>
        </td>
        <td>{musics.length}</td>
        <td>{users.length}</td>
        <td>
          <Link to={`/album/${_id}`}>
            <AiFillEye />
          </Link>
          <button onClick={() => setShowModalShow(true)}>
            <BsFillShareFill />
          </button>
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

const FormShareAlbum = styled.form`
  display: flex;
  gap: 10px;
  input {
    background-color: hsla(0, 0%, 100%, 0.1);
    border: 5px;
    color: hsla(0, 0%, 100%, 0.7);
    height: 40px;
    opacity: 1;
    padding: 8px 32px;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    flex-grow: 1;
  }
  button {
    background-color: #2cb557;
    display: block;
    border: none;
    border-radius: 2px;
    text-align: center;
    padding: 10px;
    font-weight: 600px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default SingleAlbum;
