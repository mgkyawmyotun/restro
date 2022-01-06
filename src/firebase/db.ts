import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import app from './intialize';

const db = getFirestore(app);

export async function addMenu(menuData: any, userID: string) {
  await addDoc(collection(db, 'users', userID, 'menu'), menuData);
}
export async function getMenus(userID: string) {
  const querySnapshot = await getDocs(collection(db, 'users', userID, 'menu'));
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function addRes(resData: any, userID: string) {
  return await setDoc(doc(db, 'restaurant', userID), resData);
}

export async function getRes(userID: string) {
  const querySnapshot = await getDoc(doc(db, 'restaurant', userID));
  if (querySnapshot.exists()) {
    return querySnapshot.data();
  } else {
    return null;
  }
}
