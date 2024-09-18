import React from 'react';

const HeroSection = ({ data }) => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center px-6 lg:px-10 py-20 lg:py-20 bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900">
      {/* Left Side - Text */}
      <div className="text-gray-900 dark:text-white text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4" >
        <span dangerouslySetInnerHTML={{ __html: data.Head }} /> <span className="text-red-500">TAXIGO</span>
        </h1>
        <p className="text-base sm:text-lg mb-8">
          {data.Description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-400">
            {data.Button} →
          </button>
          <span className="text-lg sm:text-xl font-semibold">{data.Offer}</span>
        </div>

      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-auto lg:right-10 lg:top-20">
        {data.Image && (
          <img alt="Car Model" src={data.Image} className="w-full lg:w-auto" />
        )}
      </div>
    </section>
  );
}
export default HeroSection;
