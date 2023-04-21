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
