import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  user: null,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
