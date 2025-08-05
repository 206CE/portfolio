"use client";

/* 1.0.0

*/


import { submitForm } from "./_actions";
import { useActionState } from "react";

export default function Contact() {
  const [result, formAction] = useActionState(submitForm, null);
  return (
    <section className=" ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16  text-center text-gray-600  sm:text-xl">
          Please contact us...
        </p>
        <form action={formAction} className="space-y-8">
          <input
            type="hidden"
            name="access_key"
            value="8461831b-6c08-4586-8302-dd960d36aac6"
          />
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-md bg-blue-200 text-gray-900 text-md rounded-lg block w-full p-2.5 "
              placeholder="name@pergratiam.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-md font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-md text-gray-900 bg-blue-200 rounded-lg shadow-md  "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-md text-gray-900 bg-blue-200 rounded-lg shadow-lg "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" hover:cursor-pointer hover:bg-blue-400 font-bold rounded-md px-3.5 py-2.5 text-md  text-black border-1 border-black shadow-sm"
          >
            Send message
          </button>
          <span>{result?.message}</span>
        </form>
      </div>
    </section>
  );
}
