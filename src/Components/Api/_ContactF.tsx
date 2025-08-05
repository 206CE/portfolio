"use client";

{
  /* 1.0.1
  
  > Combine with actions.ts
  > Add more Parameters and flexability
  
  CSS:
  --primary
  --secondary
  --text-primary
--text-secondary
  --surface
  */
}

import { submitForm } from "./_actions";
import { useActionState } from "react";

export default function ContactF() {
  const [result, formAction] = useActionState(submitForm, null);
  return (
    <section className=" ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-(--text-primary) ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16  text-center text-(--text-secondary)  sm:text-xl">
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
              className="block mb-2 text-md font-medium text-(--text-secondary) "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-md bg-(--surface) text-(--text-secondary) text-md  block w-full p-2.5 "
              placeholder="name@domain.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-md font-medium text-(--text-secondary) "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-md text-(--text-secondary) bg-(--surface) shadow-md  "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-(--text-secondary) "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-md text-(--text-secondary) bg-(--surface)  shadow-lg "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" text-(--primary) text-2xl p-2 transition duration-300 hover:scale-110 translate mr-10 font-bold border cursor-pointer"
          >
            Send message
          </button>
          <span>{result?.message}</span>
        </form>
      </div>
    </section>
  );
}
