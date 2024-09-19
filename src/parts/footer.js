export const FooterSection = () => (
  <footer className="bg-gray-800 text-white bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900 py-6">
    <div className="flex justify-center">
      <h2 className="text-3xl font-semibold mb-8 dark:text-white relative inline-block border-b-4 border-transparent pb-2">
        Quick Links
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-red-700  to-yellow-400 transform translate-y-2"></span>
      </h2>
    </div>
    <div className="container flex justify-evenly mx-auto md:flex md:justify-evenly lg:flex lg:justify-evenly xl:flex xl:justify-evenly text-center">
      <ul className="flex lg:items-start flex-col mb-3 left-0">
        <li><a href="/privacy" className="hover:underline">Home</a></li>
        <li><a href="/terms" className="hover:underline">About Us</a></li>
        {/* <li><a href="/terms" className="hover:underline">Contact</a></li> */}
        {/* <li><a href="/terms" className="hover:underline">FAQ</a></li> */}
      </ul>

      <ul className="flex lg:items-start flex-col left-0">
        <li>
          <a href="https://facebook.com/Taxigo" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
        </li>
        <li>
          {/* <a href="https://twitter.com/Taxigo" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a> */}
        </li>
        <li>
          <a href="https://instagram.com/Taxigo" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </li>
      </ul>
    </div>

    <div className="flex  justify-center">
      <ul className="flex lg:items-start mt-3 left-0">
        <li><a href="/privacy" className="hover:underline mr-4">Privacy Policy</a></li>
        <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
      </ul>
    </div>
    <div className="flex  mt-5 justify-center">
      <p className="mb-4">&copy; 2024 Taxigo. All rights reserved.</p>
    </div>
  </footer>
);
