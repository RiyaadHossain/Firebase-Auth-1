import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  // Initialize Firebase Authentication and get a reference to the service
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userr = result.user
        setUser(userr)
        console.log(user);
      }).catch((error) => {
    console.log(error);
  });
  }
  
  return (
    <div className="App">
      <h1>Welcome to Our Website</h1>
      <button onClick={googleSignIn}>Log In</button>
      <div>
        <h3>Name: {user.displayName}</h3>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
