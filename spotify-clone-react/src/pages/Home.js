import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllSong } from "../api";
import CardSong from "../components/CardSong";
import { useGlobalContext } from "../contexts/context";

const Home = () => {
  const { songsList, setSongsList } = useGlobalContext();
  useEffect(() => {
    getAllSong().then(({ data }) => {
      setSongsList(data);
    });
  }, [setSongsList]);

  return (
    <HomeSession>
      <div className="list-song">
        {songsList.map((song, index) => (
          <CardSong key={index} song={song} />
        ))}
      </div>
    </HomeSession>
  );
};
const HomeSession = styled.section`
  padding: 1rem;
  img {
    max-width: 100%;
    display: block;
    height: 200px;
  }
  .list-song {
    display: flex;
    flex-wrap: wrap;

    &-card {
      margin: 1rem;
      cursor: pointer;
      background: #181818;
      border-radius: 10px;
      width: 250px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      padding: 16px;
      color: #fff;
      h6 {
        font-size: 18px;
        text-decoration: underline;
      }
      p {
        color: #6a6a6a;
      }
    }
  }
`;
export default Home;
