import axios from "axios";
const spotifyApi = axios.create({
  baseURL: "http://localhost:8080/v1",
});

export const getAllSong = async () => {
  try {
    const { data } = await spotifyApi.get("/music");
    return data;
  } catch (error) {}
};
