import server from "./axios";

export const login = async ({ userName, password }) => {
  try {
    const res = await server.post("/auth/login", {
      userName: userName,
      password: password,
    });
    return res.data;
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
