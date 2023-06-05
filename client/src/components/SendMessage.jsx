import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const SendMessage = (props) => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const { currentUser } = UserAuth();
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "" && !image) {
      alert("Enter valid message or select an image!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      let imgUrl = null;
      
      if (image) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, image);
        
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            null,
            reject,
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(url => {
                imgUrl = url;
                resolve();
              });
            }
          )
        });
      }
      
      await addDoc(collection(db, props.collectionName), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
        imgUrl
      });
      
    } catch(error) {
      console.log(error);
    }
    
    setValue("");
    setImage(null);
  }
  
  return (
    <div className="fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex mx-auto">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" placeholder="Enter your message" />
        <input type="file" onChange={e => setImage(e.target.files[0])} style={{ display: "none" }} id="image-upload" accept="image/*" />
        <label htmlFor="image-upload" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v6h6M12 18v-6M7 13h10"></path></svg>
        </label>
        <button type="submit" className="w-auto bg-black text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default SendMessage;
