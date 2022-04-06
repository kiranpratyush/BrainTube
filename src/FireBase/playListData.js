import { db } from './FireBase';
import { doc, setDoc } from 'firebase/firestore';

async function setPlayListData(playListName,data) {
  try {
    const docRef = doc(db, "playlists",playListName);
    setDoc(docRef,{id:data},{merge:true})
  } catch (error) {
      console.log(error)
  }
}

export {setPlayListData}