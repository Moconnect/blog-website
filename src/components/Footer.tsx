import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full text-gray-700 bg-blue-400 body-font">
  <div className="container flex flex-col md:flex-row justify-evenly items-center px-5 py-10 mx-auto">
    <div className="flex-shrink-0 w-full md:w-1/4 mx-auto text-center md:mx-0 md:text-center mb-10 md:mb-0">
      <h1 className="mt-2 font-bold text-white uppercase">
        coding-school-blog
      </h1>
      <p>
        Siemensstraße 20. <br /> 9020 Klagenfurt·
        <br /> 0676 84322324
      </p>
    </div>
    <div className="flex-shrink-0 w-full md:w-1/4 mx-auto text-center md:mx-0 md:text-center mb-10 md:mb-0">
      <h2 className="mt-2 font-bold text-white uppercase">
        About
      </h2>
      <div className="mt-4">
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-white cursor-pointer hover:text-gray-700">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a className="ml-3 text-white cursor-pointer hover:text-gray-700">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
  <div className="bg-gray-300">
    <div className="container px-5 py-4 mx-auto">
      <p className="text-gray-700 text-md capitalize text-center">
        © 2024 / Coding School am Wörthersee{" "}
      </p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Footer;
