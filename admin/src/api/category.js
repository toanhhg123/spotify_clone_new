import server from "./axios";

export const getAll = async () => {
  try {
    const { data } = await server.get("/category");
    return data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const insert = async ({userName,passwordHash}) => {
    try {
      await server.post('/category',
        {
            "userName": userName,
            "passwordHash": passwordHash
        })
    } catch (error) {
      const message = error?.response?.data?.message ?? error.message;
      throw new Error(message);
    }
};


export const deleteCategory = async ({_id}) => {
    try {
      await server.delete(`/category/${_id}`)
    } catch (error) {
      const message = error?.response?.data?.message ?? error.message;
      throw new Error(message);
    }
};