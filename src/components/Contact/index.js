import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-container bg-slate-700 min-h-[calc(100vh-76px)] px-10 sm:px-14 lg:px-32 py-8 font-[Roboto]">
      <div className="pb-5 block lg:hidden">
        <center>
          <h1 className="text-[48px] font-thin font-sans text-slate-600">
            Contact
          </h1>
        </center>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex items-center justify-center">
          <img
            className="w-full h-[calc(100vh-200px)]"
            src="https://braincavesoft.com/main/images/web-development.png"
            alt="contact logo"
          />
        </div>
        <div className="border border-slate-300 bg-sky-100 rounded-md p-10 w-full">
          <form className="space-y-4" onSubmit={submitForm}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-sm font-medium text-gray-500 opacity-90"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-2 focus:border-2 transform-all duration-200 border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-2.5"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-500 opacity-90"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-2 focus:border-2 transform-all duration-200 border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-2.5"
                placeholder="abcd@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 text-sm font-medium text-gray-500 opacity-90"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-2 focus:border-2 transform-all duration-200 border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-2.5"
                placeholder="9876543210"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 text-sm font-medium text-gray-500 opacity-90"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="What would you like to share with me? Please type it here kindly"
                className="bg-gray-50 border-2 focus:border-2 transform-all duration-200 border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-2.5"
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <div className="submit-container text-center">
              <button
                type="submit"
                className="border bg-sky-700 px-10 py-2 text-[16px] text-slate-100 font-medium rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
