import server from "./axios";

export const getAll = async () => {
  try {
    const { data } = await server.get("/account");
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const findone = async ({ _id }) => {
  try {
    const { data } = await server.get(`/account/_id/${_id}`);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
export const insert = async ({ userName, passwordHash }) => {
  try {
    const { data } = await server.post("/account", {
      userName,
      passwordHash,
    });
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const update = async (body) => {
  try {
    const { data } = await server.patch(`/account/${body._id}`, body);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const deleteAccount = async (_id) => {
  try {
    const { data } = await server.delete(`/account/${_id}`);
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
