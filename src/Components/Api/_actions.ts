"use client";

/* 1.0.1 */

export async function submitForm(prevState: unknown, formData: FormData) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  }).catch((error) => {
    throw new Error("Network error: " + error.message);
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to submit form");
  }

  const data = await response.json();

  // Optional: You could trigger a client-side redirect here
  // window.location.href = "/thank-you";

  return {
    success: true,
    message: "Form submitted successfully!",
    data,
  };
}
