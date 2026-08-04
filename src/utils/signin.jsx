import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
//not a hook

const signin = async(email, password)=>{
  return signin();
   async function signin() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      return user;
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return (errorCode + errorMessage);
    }
  };
};
export default signin;
