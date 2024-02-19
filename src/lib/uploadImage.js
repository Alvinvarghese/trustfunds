import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

function gen() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

const uploadImage = async (image, name) => {
  try {
    const imagePath = `images/trustfunds_${gen()}_${name?.split(" ")?.join("_")}`;
    const storageRef = ref(storage, imagePath);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    if (url) return url;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export default uploadImage;
