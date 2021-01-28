import React, { useContext, useState, useEffect, useRef } from "react";
/* import {
  getCurrentUser,
  removeAllUsers, loginUser, updateUserCustomData
} from "../realm/connection"; */



// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthContext = React.createContext(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const realmRef = useRef(null);

  /* useEffect(() => {
    (async () => {
      let user = await getCurrentUser();
      setUser(user)
    })()
  }, []) */

  /* const signIn = async (payload) => {
    try {
      const user = await loginUser(payload);
      if (user) {
        //UPDATE USER CUSTOM DATA
        const { id } = user.identities[0];
        const payload = {
          user_find: id,
          auth_id: user.id
        }
        await updateUserCustomData(payload);

        //REFRESH CUSTOM USER DATA
        await user.refreshCustomData();

        //SET USER TO PROVIDER
        setUser(user);
      }
    } catch (err) {
      throw err
    }
  }; */

  /* const signUp = async (email, password) => {

  };

  const signOut = async () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }

    await removeAllUsers();
    setUser(null);
  }; */

  return (
    <AuthContext.Provider
      value={{
        /* signUp,
        signIn,
        signOut, */
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth };