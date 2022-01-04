import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './intialize';

export const auth = getAuth(app);
export async function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}
