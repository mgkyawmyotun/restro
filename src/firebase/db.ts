import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import app from './intialize';

const db = getFirestore(app);

export async function addMenu(menuData: any) {
  await addDoc(collection(db, 'menu'), menuData);
}
export async function getMenus() {
  const querySnapshot = await getDocs(collection(db, 'menu'));
  return querySnapshot.docs.map((doc) => doc.data());
}
