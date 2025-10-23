"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function TypingTest() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New portfolio contact");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });



      if (!res.ok) {
      let msg = "Submission failed";
        try {
          const json: unknown = await res.json();
          if (
            typeof json === "object" &&
            json !== null &&
            "errors" in json &&
            Array.isArray((json as { errors: Array<{ message?: string }> }).errors)
          ) {
            const first = (json as { errors: Array<{ message?: string }> }).errors[0];
            if (first?.message) msg = first.message;
          }
        } catch {
          // ignore JSON parse error, keep default msg
        }
        throw new Error(msg);
      }

      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err));
    }
  }
  return (
    <div
      className="relative h-screen overflow-hidden pb-20 flex flex-col items-center justify-center"
    >
      <form
        className=" flex flex-col overflow-hidden justify-center items-center gap-4 p-4 bg-white/10 rounded-lg"
        onSubmit={onSubmit}
        onPointerDownCapture={(e) => e.stopPropagation()}
        onClickCapture={(e) => e.stopPropagation()}
        onKeyDownCapture={(e) => e.stopPropagation()}
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />

        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />

        <input
          id="funFact"
          name="funFact"
          type="text"
          placeholder="Fun fact about you"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />

        <input
          id="favFood"
          name="favFood"
          type="text"
          placeholder="Favourite food"
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="self-start rounded-full outline bg-primary px-6 py-2 font-medium text-gray-300 border-gray-300 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 text-sm">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">Error: {error}</p>
        )}
      </form>
    </div>
  );
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return "Something went wrong";
}