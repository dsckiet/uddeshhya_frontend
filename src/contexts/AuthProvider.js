import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "../reducers/auth.reducer";

export const AuthContext = createContext(null);
export const DispatchContext = createContext(null);

const AuthProvider = props => {
  const defaultVal = { user: "", token: "" };
  const [Auth, dispatch] = useReducer(authReducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem("auth") || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(Auth));
  }, [Auth]);

  return (
    <AuthContext.Provider value={Auth}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
