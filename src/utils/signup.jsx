import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import loginlanguage from "./loginlanguage";
//not a hook

const signup = (email, password,setvalidatemssg,language) => {
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
      setvalidatemssg(loginlanguage[language].signuperror)
      return errorCode+errorMessage;
    }
  };
}

export default signup;
