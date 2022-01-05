import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import app from './intialize';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export async function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function loginUser(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function singInWithGoogle() {
  return signInWithPopup(auth, provider);
}
