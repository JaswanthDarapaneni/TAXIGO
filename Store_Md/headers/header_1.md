# Header_1

 import React, { useState, useEffect } from 'react';
import BrandIcon from './BrandIcon';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'FAQ', href: '#' },
];
function Header() {
  // State to manage the visibility of the collapse menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('Home');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsTextVisible(false); // Hide text for small screens (mobile)
      } else {
        setIsTextVisible(true); // Show text for larger screens
      }
    };

    // Set initial state and add resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };


  return (
    ``` html
    <div className=" flex shadow-lg py-4 px-4 sm:px-10 bg-light-theme dark:bg-dark-theme font-luto min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <BrandIcon isTextVisible={isTextVisible} />

        {/* header Menu */}
        <div className="hidden lg:flex ml-auto  lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.name)}
              className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 
             ${activeLink === item.name
                  ? 'text-[#007bff]  dark:text-[#007bff]' // Blue text and shadow when active
                  : 'text-gray-900 hover:text-[#007bff] dark:text-white '}`} // Hover to blue with shadow
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Search Bar*/}
        <div className="flex items-center ml-auto md:space-x-5">
          <div className="relative w-48 h-10">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full pl-4 pr-10 text-sm text-zinc-700 font-Lato bg-white rounded-md shadow outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                className="cursor-pointer fill-gray-600">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>
          </div>
        </div>

        {/* Open Mobile Menu */}
        <div>
          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6 dark:text-white " />
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        {/* Background overlay */}
        <div className="fixed inset-0 z-50 bg-black/50" />

        {/* The actual Dialog */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm px-6 py-6 bg-white dark:bg-dark-theme sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <BrandIcon isTextVisible={true} />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Links */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleLinkClick(item.name)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                            ${activeLink === item.name
                        ? 'text-[#007bff] bg-gray-100 dark:bg-gray-800 dark:text-white'
                        : 'text-gray-900 hover:bg-gray-50 dark:text-white'}`}
                  >
                    {item.name}
                  </a>

                ))}
              </div>

              {/* Additional Links like Login */}
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>

    </div>
```

  );
}

export default Header;

