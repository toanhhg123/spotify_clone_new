import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getDetailsAlbum } from "../api";
import Banner from "../components/Banner";
import ListMusic from "../components/ListMusic";

const DetailsAlbum = () => {
  const [album, setAlbum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    toast.promise(getDetailsAlbum(id), {
      pending: "...loading",
      success: {
        render({ data: { data } }) {
          setAlbum(data);
          return `get album success `;
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  }, [id]);
  return (
    <div>
      <Banner name={album.name} users={album.users?.length} />
      {album.musics && <ListMusic musics={album.musics} />}
    </div>
  );
};

export default DetailsAlbum;
