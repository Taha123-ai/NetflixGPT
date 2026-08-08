import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import loginlanguage from "./loginlanguage";
//not a hook

const signin = async(email, password,setvalidatemssg,language)=>{
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
      return setvalidatemssg(loginlanguage[language].signinerror)
    }
  };
};
export default signin;
