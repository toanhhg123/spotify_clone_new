import server from "./axios";

export const getAll = async () => {
  try {
    const { data } = await server.get("/music");
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
export const insert = async (music) => {
  try {
    const formdata = new FormData();
    formdata.append("img", music.img);
    formdata.append("audio", music.audio);
    formdata.append("singer", music.singer);
    formdata.append("title", music.title);
    formdata.append("duration", music.duration);

    const { data } = await server.post("/music", formdata, {});
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
export const deleteMusic = async ({ _id }) => {
  try {
    console.log(_id);
    const { data } = await server.delete(`/music/${_id}`);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
