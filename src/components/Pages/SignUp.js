import React,{ useState } from 'react';
import firebase from 'firebase';
import '../../App.css';
import SignUpForm from '../SignUpForm';
import { Link } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyB8NAtsXES7vaKIY3AF9F7fvrn3KX3TylY",
  authDomain: "test-portfolio-db608.firebaseapp.com",
  projectId: "test-portfolio-db608",
  storageBucket: "test-portfolio-db608.appspot.com",
  messagingSenderId: "726237190188",
  appId: "1:726237190188:web:d69560c9f5939a252e9989",
  measurementId: "G-8N0KRQT62Q"
};

firebase.initializeApp(firebaseConfig);

export default function SignUp() {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const [user, setUser] = useState({name: "", email: ""});

  const Login = async (details) => {

    console.log(details);
    const db = firebase.firestore();
    const citiesRef = db.collection('users');
    const snapshot = await citiesRef
    .where('Name', '==' , details.name)
    .where('Email', '==' , details.email)
    .where('Password', '==' , details.password)
    .get();
    if(snapshot.empty) {
      console.log("Details do not match!");
      setError("Details do not match!");
    } else {
      setError("");
      setSuccess("success!");
      console.log({success});
      setUser({
        name: details.name,
        email: details.email
      });
    };
  };
  const closeSuccess = () =>{
    setSuccess("");
  }
  return (
    <div className='sign-up-container'>
      <h1 className='sign-up'>
        SIGN UP
      </h1>
      {(success != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name} {success}</span></h2>
            <Link to="/">
              <button className="bt" onClick={closeSuccess}>Logoutして、Homeに戻る</button>
            </Link>
        </div>
      ) : <SignUpForm Login={Login} error={error} />}
      </div>
    );
};