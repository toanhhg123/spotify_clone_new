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

export const findone = async ({_id}) => {
    try {
      const { data } = await server.get(`/account/_id/${_id}`);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message ?? error.message;
      throw new Error(message);
    }
};

export const update = async ({_id,userName,passwordHash}) => {
    try {
      await server.put(`/account/_id/${_id}`,
        {
            "userName": userName,
            "passwordHash": passwordHash
        })
    } catch (error) {
      const message = error?.response?.data?.message ?? error.message;
      throw new Error(message);
    }
};
