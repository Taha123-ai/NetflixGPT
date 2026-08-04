import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
//not a hook

const signup = (email, password,setvalidatemssg) => {
  return signup();
   async function signup() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setvalidatemssg("User Already exist.")
      return errorCode+errorMessage;
    }
  };
}

export default signup;
