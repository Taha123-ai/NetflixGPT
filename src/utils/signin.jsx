import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
//not a hook

const signin = async(email, password,setvalidatemssg)=>{
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
      console.log(errorCode);
      // const errorMessage = error.message;
      return setvalidatemssg("User Not Found.")
    }
  };
};
export default signin;
