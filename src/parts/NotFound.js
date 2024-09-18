// NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
