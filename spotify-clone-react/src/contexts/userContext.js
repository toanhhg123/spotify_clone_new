import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    loadToken();
  }, []);
  const loadToken = () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const decoded = jwt_decode(accessToken);
      setUserToken(decoded);
    } catch (error) {
      setUserToken(null);
    }
  };
  const removeToken = () => {
    Cookies.remove("accessToken");
    loadToken();
  };
  return (
    <UserContext.Provider value={{ userToken, loadToken, removeToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
