import React, { createContext, useContext, useState } from "react";
import { Props, UserType } from "./types";

export const UserContext = createContext({} as any);

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
