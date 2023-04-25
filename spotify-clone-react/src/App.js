import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LeftMenu from "./components/LeftMenu";
import MainContainer from "./components/MainContainer";
import RightMenu from "./components/RightMenu";
import Album from "./pages/Album";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import DetailsAlbum from "./pages/DetailsAlbum";
import { useGlobalContext } from "./contexts/context";
import React, { useEffect } from "react";
import { getAllSong } from "./api";
import AlbumShared from "./pages/AlbumShared";
import Playlist from "./pages/Playlist";
import DetailPlaylist from "./pages/DetailsPlaylist";
function App() {
  const { setSongsList, setCurrentSong } = useGlobalContext();

  useEffect(() => {
    getAllSong().then(({ data }) => {
      setSongsList(data);
      setCurrentSong(data[0]);
    });
  }, [setCurrentSong, setSongsList]);
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="" element={<PrivateRoute />}>
            <Route element={<Album />} path="/album" />
            <Route element={<Playlist />} path="/playlist" />
            <Route element={<DetailPlaylist />} path="/playlist/:id" />
            <Route element={<AlbumShared />} path="/shared" />
            <Route element={<DetailsAlbum />} path="/album/:id" />
          </Route>
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/Login" />
        </Routes>
      </MainContainer>
      <RightMenu />
      <ToastContainer autoClose={3000} />

      <div className="background"></div>
    </div>
  );
}

export default React.memo(App);
