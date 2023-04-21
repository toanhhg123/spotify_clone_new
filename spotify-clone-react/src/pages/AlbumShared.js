import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
  addAlbum,
  deleteAlbum,
  findOneAccount,
  getAllAlbumShare,
  shareAlbum,
} from "../api";
import SingleAlbum from "../components/Album/SingleAlbum";
const AlbumShared = () => {
  const [albums, setAlbums] = useState([]);
  const [name, setName] = useState("");
  const handleAddAlbum = (e) => {
    e.preventDefault();
    toast.loading("album loading ...");
    addAlbum({ name })
      .then(({ data }) => {
        setAlbums([...albums, data]);
        toast.dismiss();
      })
      .catch((e) => toast.error(e.message));
  };

  useEffect(() => {
    toast.loading("album loading ...");
    getAllAlbumShare()
      .then(({ data }) => {
        setAlbums(data);
        toast.dismiss();
      })
      .catch((e) => toast.error(e.message));
  }, []);

  const handleDelete = (_id) => {
    toast.promise(deleteAlbum(_id), {
      pending: "...loading",
      success: {
        render({ data }) {
          setAlbums(() => albums.filter((a) => a._id !== data.data._id));
          return `delete success ${data.data.name}`;
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };
  const addUserShare = async (userName, id) => {
    const { data: user } = await findOneAccount({
      key: "userName",
      value: userName,
    });
    const { data: album } = await shareAlbum(id, { userId: user._id });
    return album;
  };
  const handleShareAlbum = async (userName, id) => {
    toast.promise(addUserShare(userName, id), {
      pending: "...loading",
      success: {
        render({ data }) {
          setAlbums([...albums.filter((al) => al._id !== data._id), data]);
          return "success";
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
      {" "}
      <h2 className="title">
        {" "}
        The list <span>{albums.length} songs</span>
      </h2>
      <FormAddAlbum onSubmit={handleAddAlbum}>
        <input
          placeholder="...name album"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Create</button>
      </FormAddAlbum>
      <div className="songs-container">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>musics</th>
              <th>users</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((item) => {
              return (
                <SingleAlbum
                  album={item}
                  key={item._id}
                  handleDelete={() => handleDelete(item._id)}
                  handleShareAlbum={handleShareAlbum}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10px 30px;
  height: 100%;
  .title {
    font-size: 18px;
    color: #f1f1f1;
    span {
      color: #848484;
      font-size: 12px;
    }
  }
  .songs-container {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  table {
    width: 100%;
    padding: 1rem;
    margin: 2rem 0;
    text-align: center;
    thead {
      background-color: hsla(0, 0%, 100%, 0.1);
    }
    td,
    th {
      padding: 10px;
      color: #f1f1f1;
    }
  }

  @media screen and (max-width: 550px) {
    .songs-container {
      height: 140px;
    }
  }
`;

const FormAddAlbum = styled.form`
  margin-top: 1rem;
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

export default AlbumShared;
