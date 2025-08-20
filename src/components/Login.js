
import { useState } from 'react'
import React from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);
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

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?"SignIn":"signUp"}</h1>
      {!isSignInForm && (<input type="text" placeholder="Full Name" 
          className="p-4 my-4 w-full bg-gray-700"/>)}
          <input type="text" placeholder="Email address" 
          className="p-4 my-4 w-full bg-gray-700"/>
          <input type="text" placeholder="password"
           className="p-4 my-4 w-full  bg-gray-700"/>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"SignIn":"signUp"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm?"New to netflix? Sign Up Now":"Already Register:SignIn Now"}</p>
      </form>

    </div>
  )
}

export default Login;

