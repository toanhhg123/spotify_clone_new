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
    console.log(music)
    const {data} = await server.post('/music', { ...music, category: null });
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
export const deleteMusic = async ({ _id }) => {
  try {
    console.log(_id)
    const {data} = await server.delete(`/music/${_id}`);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};


