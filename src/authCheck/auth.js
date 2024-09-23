// auth.js

// Function to check if the user is logged in
export const isUserLoggedIn = () => {
    // Check for a specific key in local storage (e.g., "token" or "user")
    // return localStorage.getItem('token') !== null; // Adjust the key based on your implementation
    return true
  };
  
  // Function to log in (for demonstration purposes)
  export const logIn = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to log out
  export const logOut = () => {
    localStorage.removeItem('token');
  };
  