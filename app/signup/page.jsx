// SignUp.js
'use client'
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from'react-firebase-hooks/auth';
import {auth} from'@/app/firebase/config'


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

 

  const handleSignUp = async() => {
    // e.preventDefault();
    // // Handle sign-up logic here
    // console.log('Email:', email);
    // console.log('Password:', password);

    try{
      const res = await createUserWithEmailAndPassword(email, password)
      console.log({res})
      setEmail('')
      setPassword('')
    }catch(e){
      console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
       
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            
            onClick={handleSignUp}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          >
            Sign Up
          </button>
          
      </div>
    </div>
  );
};

export default SignUp;
