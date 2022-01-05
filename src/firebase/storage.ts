import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import app from './intialize';
const storage = getStorage(app);
export async function getResImg() {
  const resImgRef = ref(
    storage,
    'restaurants/dan-gold-E6HjQaB7UEA-unsplash.jpg'
  );
  return await getDownloadURL(resImgRef);
}
