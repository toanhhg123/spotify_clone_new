import axios from "axios";
export const spotifyApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  withCredentials: true,
});

export const getAllSong = async () => {
  try {
    const { data } = await spotifyApi.get("/v1/music");
    return data;
  } catch (error) {}
};

export const findOneAccount = async ({ key, value }) => {
  try {
    const { data } = await spotifyApi.get(`/v1/account/${key}/${value}`);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const register = async (user) => {
  try {
    const res = await spotifyApi.post("/v1/auth/register", user);
    localStorage.setItem("authSpotify", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};
export const login = async (user) => {
  try {
    const res = await spotifyApi.post("/v1/auth/login", user);
    localStorage.setItem("authSpotify", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const getAllAlbum = async () => {
  try {
    const { data } = await spotifyApi.get("/v1/album");
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const getAllAlbumShare = async () => {
  try {
    const { data } = await spotifyApi.get("/v1/album/shared");
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const addAlbum = async (body) => {
  try {
    const { data } = await spotifyApi.post("/v1/album", body);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const deleteAlbum = async (id) => {
  try {
    const { data } = await spotifyApi.delete("/v1/album/" + id);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const getDetailsAlbum = async (id) => {
  try {
    const { data } = await spotifyApi.get("/v1/album/" + id);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const shareAlbum = async (id, body) => {
  try {
    const { data } = await spotifyApi.patch("/v1/album/" + id, body);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};

export const addMusics = async (id, body) => {
  try {
    const { data } = await spotifyApi.patch("/v1/album/addmusic/" + id, body);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw Error(message);
  }
};
