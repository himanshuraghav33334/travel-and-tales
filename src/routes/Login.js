// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

  
// Define the Login component
const Login = () => {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authToken, login } = useAuth();

  // Event handler for form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Prepare data to be sent in the request body
    const data = {
      username: username,
      password: password,
    };

    try {
      // Send a POST request to the server
      const response = await axios.post('http://localhost:5000/login', data);
      
      
      // Check if response.data is defined before accessing it
      if (response && response.data) {
        login(response.data.token);
        document.cookie = `token=${response.data.token}`;
        // Handle the response as needed (e.g., redirect on success)
        console.log('Login successful');
      } else {
        // Handle the case where response.data is undefined
        console.error('Login failed. Response data is undefined.');
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Login failed', error.response ? error.response.data : error.message);
    }
  };


  return (
    <section class="bg-gray-50 ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">

          Login
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form onSubmit={handleLogin} class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 ">username</label>
                <input type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input value={password}
                  onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 ">Remember me</label>
                  </div>
                </div>                <a href="#" class="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
              </div>
              <button type="submit" class="w-full  text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
              <p class="text-sm font-light text-gray-500 ">
                Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline "><Link className="" to="/createuser" >Signup</Link></a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the Login component
export default Login;
