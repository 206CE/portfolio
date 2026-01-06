"use client";

/*  2.0.2


  Improvements:
  -props for labels
  -props for inputs
  -props for button


CSS:
  --primary
  --text-primary
  --text-secondary
  --surface
  


*/

export default function Contacts() {
  async function handleSubmit(e:React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8461831b-6c08-4586-8302-dd960d36aac6",
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
        email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
        message: (form.elements.namedItem("message") as HTMLInputElement)?.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section className="py-8 lg:py-16 px-4 mx-auto">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-(--text-primary)">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 text-center text-(--text-secondary) sm:text-xl">
        Please contact us...
      </p>
      <form className="" onSubmit={handleSubmit}>
        <fieldset>
          <label
            className="block m-2 text-md font-medium text-(--text-secondary)"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="shadow-md bg-(--surface) text-(--text-secondary) text-md block w-full p-2.5 mb-3"
            type="text"
            id="name"
            required
            placeholder="John Smith"
            autoComplete="off"
          />
          <label
            className="block m-2 text-md font-medium text-(--text-secondary)"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow-md bg-(--surface) text-(--text-secondary) text-md block w-full p-2.5 mb-3"
            type="email"
            id="email"
            required
            placeholder="username@domain.com"
            autoComplete="off"
          />
          <label
            className="block m-2 text-md font-medium text-(--text-secondary)"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="shadow-md bg-(--surface) text-(--text-secondary) text-md block w-full p-2.5 mb-3"
            id="message"
            required
            rows={3}
            placeholder="This is your message..."
            
          />
        </fieldset>
        <button
          className="btn"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}
