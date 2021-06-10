import React, { createContext, useContext, useState } from "react";
import { AuthType, Props, UserType } from "./types";

const UserContext = createContext({} as AuthType);

export const useAuth = () => {
  return useContext(UserContext);
};

const AuthProvider = ({ children }: Props) => {
  const [isLogged, setLogged] = useState(false);
  const [user, setUser] = useState<UserType>({
    name: "",
    email: "",
    token: "",
  });

  return (
    <UserContext.Provider
      value={{ isLogged, user, actions: { setLogged, setUser } }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
