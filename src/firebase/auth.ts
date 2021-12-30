import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './intialize';

const auth = getAuth(app);
/* eslint no-unused-expressions */
export function createUser(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {});
}
