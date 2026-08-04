import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/userslice";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet } from "react-router-dom";

// App.jsx (or another root component) → Global application logic such as authentication listeners, theme initialization, etc.

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid ,photoURL} = user;
        dispatch(adduser({ displayName: displayName, email: email, uid: uid,photoURL:photoURL }));
      } else {
        dispatch(removeuser());
      }
    });
  }, []);
  return (
    <Outlet /> //react router replaces this outlet with the matched url route component and it get filled and app return that component.
  );
};

export default App;
