import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const accessToken = Cookies.get("accessToken");
  useEffect(() => {
    var decoded = jwt_decode(accessToken);
    setUserToken(decoded);
  }, [accessToken, setUserToken]);
  return (
    <UserContext.Provider value={userToken}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
