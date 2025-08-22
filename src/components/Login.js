
import { useState,useRef } from 'react'
import React from 'react'
import Header from './Header'
import { Validate } from '../utils/Validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  //useNavigate Hook
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClicked=()=>{
    //Validate the form data
    const message=Validate(email.current.value,password.current.value);
    setErrorMessage(message);
      if(message)return;
        //sign-in,sign-up
        if(!isSignInForm){
          //sign-up logic
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, 
  photoURL: "https://media.licdn.com/dms/image/v2/C4E35AQERf5_TBf2Pjg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1620656469658?e=1756479600&v=beta&t=ALeUQpT9SjfYg-Tsa1FFNsS3s7ALXxbwILD_k6XlEao"
  }).then(() => {
  // Profile updated!
   const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
  
  }).catch((error) => {
  setErrorMessage(error.message);
  });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode+"-"+errorMessage);
  });


        }else{
          //sign-in Logic 

          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });

        }
  }
  
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>

      <div className="absolute">
        <img  src="https://www.astound.com/wp-content/uploads/2022/11/netflix-hero-200x600-darker-1.webp"
      alt="logo"
      />
      </div>

      <form 
      onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?"SignIn":"signUp"}</h1>
      {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" 
          className="p-4 my-4 w-full bg-gray-700"/>)}
          <input ref={email} type="text" placeholder="Email address" 
          className="p-4 my-4 w-full bg-gray-700"/>
          <input ref={password} type="text" placeholder="password"
           className="p-4 my-4 w-full  bg-gray-700"/>
           <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClicked}>
            {isSignInForm?"SignIn":"signUp"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm?"New to netflix? Sign Up Now":"Already Register:SignIn Now"}</p>
      </form>

    </div>
  )
}

export default Login;

