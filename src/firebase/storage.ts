import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import app from './intialize';
const storage = getStorage(app);
export async function getResImg() {
  const resImgRef = ref(
    storage,
    'restaurants/dan-gold-E6HjQaB7UEA-unsplash.jpg'
  );
  return await getDownloadURL(resImgRef);
}

export async function getImage(path: string) {
  const resImgRef = ref(storage, path);
  return await getDownloadURL(resImgRef);
}
export async function uploadFile(file: File | Blob, name: string) {
  const storage = getStorage();
  const storageRef = ref(storage, 'menuphotos/' + name);
  // 'file' comes from the Blob or File API
  return await uploadBytes(storageRef, file);
}

export async function uploadResImg(file: File | Blob, name: string) {
  const storage = getStorage();
  const storageRef = ref(storage, 'restaurant/' + name);
  // 'file' comes from the Blob or File API
  return await uploadBytes(storageRef, file);
}
