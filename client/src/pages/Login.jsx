import React, { useState } from 'react';

function LoginSignup() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    //todo add login logic
    console.log('Login submitted:', { loginUsername, loginPassword });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    //todo add signup logic
    console.log('Signup submitted:', { signupUsername, signupPassword });
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="border-2 border-lime-700 rounded-lg p-6 m-2 w-1/2 justify-center items-center">
        <h2 className="text-3xl font-semibold mb-5">Login</h2>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label htmlFor="loginUsername" className="block">Username:</label>
            <input
              type="text"
              id="loginUsername"
              className="border-2 border-lime-700 rounded p-1 w-3/4"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="loginPassword" className="block">Password:</label>
            <input
              type="password"
              id="loginPassword"
              className="border-2 border-lime-700 rounded p-1 w-3/4"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-green-700 text-white rounded p-2 w-3/4">Login</button>
        </form>
      </div>

      <div className="border-2 border-indigo-800 rounded-lg p-6 m-2 w-1/2">
        <h2 className="text-3xl font-semibold mb-5">Sign Up</h2>
        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <div>
            <label htmlFor="signupUsername" className="block">Username:</label>
            <input
              type="text"
              id="signupUsername"
              className="border-2 border-indigo-800 rounded p-1 w-3/4"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="signupPassword" className="block">Password:</label>
            <input
              type="password"
              id="signupPassword"
              className="border-2 border-indigo-800 rounded p-1 w-3/4"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-indigo-700 text-white rounded p-2 w-3/4">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
