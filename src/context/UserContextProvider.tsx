import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/auth';

export const UserContext = createContext<{ user: User | null | undefined }>({
  user: undefined,
});
const UserContextProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        setUser(authuser);
      } else {
        setUser(null);
      }
    });
  });
  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
