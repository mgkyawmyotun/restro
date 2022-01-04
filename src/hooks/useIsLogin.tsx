import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';

export const useIsLogin = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [user]);
  return [loading] as const;
};
