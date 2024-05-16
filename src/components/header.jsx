import React, { useRef, useCallback, useEffect, useState } from "react";

import Hamburger from "../components/hamburger";

// images
import Img from "../assets/my-image (2).png";
import { Link } from "react-router-dom";
import Darkmode from "./darkmode";
import clsx from "clsx";

export default function Header() {
  const headerRef = useRef();

  function NavToggle() {
    headerRef.current?.classList.toggle("active");
  }

  const onScroll = useCallback(() => {
    const { scrollY } = window;

    scrollY > 10
      ? headerRef.current?.classList.add("active")
      : headerRef.current?.classList.remove("active");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const [navbarIsActive, setNavbarIsActive] = useState(false);

  return (
    <div>
      <nav
        ref={headerRef}
        className=" border-gray-200 bg-transparent w-full fixed z-50"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Img} className="h-10 self-center text-3xl" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white hover:text-green-500 bg-green-500 hover:bg-white transition-all duration-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Contact Us
            </button>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => {
                setNavbarIsActive(!navbarIsActive);
              }}
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">
                <div>
                  <button
                    data-collapse-toggle="navbar-hamburger"
                    type="button"
                    class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-hamburger"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
              </span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={clsx(
              "items-center justify-between w-full md:flex md:w-auto md:order-1",
              {
                hidden: navbarIsActive === false,
                flex: navbarIsActive === false,
              }
            )}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-white bg-green-400 rounded md:bg-transparent md:text-green-400 md:dark:text-green-400"
                  aria-current="page"
                >
                  Asosiy
                </Link>
              </li>
              <li>
                <Link
                  to="/address"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Manzil
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  O'qituvchilar
                </Link>
              </li>
              <li>
                <Link
                  to="/ourteam"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Jamoa
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Yangiliklar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
