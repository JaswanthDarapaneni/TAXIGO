import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandIcon from './BrandIcon';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchBar from './search';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Passenger', href: '/passenger' },
];
const buttons = [
  { name: 'Login', href: '/signin' },
  { name: 'Sign Up', href: '/signup' },
];

function Header({ loginStatus, mode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(loginStatus);
    const handleResize = () => {
      setIsTextVisible(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex shadow-lg py-4 px-4 sm:px-10 bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900 font-luto min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between w-full">
          <BrandIcon isTextVisible={isTextVisible} />
          {location.pathname === '/signin' || location.pathname === '/signup' ? '' : <SearchBar />}

          <div className="hidden lg:flex ml-auto lg:gap-x-12">
            {navigation.map((item) => {
              if (location.pathname === '/signin' || location.pathname === '/signup') {
                if (item.name === 'Home') {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 ${location.pathname === item.href
                        ? 'text-yellow-400'
                        : 'text-gray-900 hover:text-yellow-400 dark:text-white'
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return null;
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 ${location.pathname === item.href
                    ? 'text-yellow-400'
                    : 'text-gray-900 hover:text-yellow-400 dark:text-white'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Show user icon if logged in, otherwise show login/signup buttons */}
            {isLoggedIn ? (
              <div className="flex items-center">
                <UserCircleIcon className="h-8 w-8 text-gray-900 dark:text-white" />
              </div>
            ) : (
              buttons.map((item) => {
                if (location.pathname === item.href) {
                  return null;
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block px-4 py-2 text-base font-semibold leading-7 rounded-full ${location.pathname === item.href
                      ? 'bg-yellow-400 text-white'
                      : item.name === 'Login'
                        ? 'bg-transparent text-gray-900 hover:text-yellow-400 dark:text-white'
                        : 'bg-black text-white hover:bg-yellow-400'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })
            )}
          </div>

          <div>
            <button
              id="toggleOpen"
              className={`lg:hidden `}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${mode} dark:text-white`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden  "
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm px-6 py-6 ${mode} dark:bg-black sm:ring-1 sm:ring-gray-900/10`}>

            <div className="flex items-center justify-between">
              <BrandIcon isTextVisible={true} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`-m-2.5 rounded-md p-2.5 ${mode} dark:text-white dark:hover:text-yellow-400`}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    if (location.pathname === '/signin' || location.pathname === '/signup') {
                      if (item.name === 'Home') {
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 ${location.pathname === item.href
                              ? 'text-yellow-400'
                              : 'text-gray-900 hover:text-yellow-400 dark:text-white'
                              }`}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                      return null;
                    }
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}

                        className={`-mx-3 block px-3 py-2 text-base font-semibold leading-7 ${location.pathname === item.href
                          ? 'text-yellow-400'
                          : 'text-gray-900 hover:text-yellow-400 dark:text-white'
                          }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;
