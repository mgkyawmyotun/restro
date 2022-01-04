import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

export const useUser = () => {
  const { user } = useContext(UserContext);
  return [user] as const;
};
