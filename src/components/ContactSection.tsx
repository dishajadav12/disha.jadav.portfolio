// "use client";

// import { useState } from "react";

// type Status = "idle" | "sending" | "sent" | "error";

// export default function TypingTest() {
//   const [status, setStatus] = useState<Status>("idle");
//   const [error, setError] = useState<string | null>(null);

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus("sending");
//     setError(null);

//     const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;
//     const form = e.currentTarget;
//     const data = new FormData(form);
//     data.append("_subject", "New portfolio contact");

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         body: data,
//         headers: { Accept: "application/json" },
//       });



//       if (!res.ok) {
//       let msg = "Submission failed";
//         try {
//           const json: unknown = await res.json();
//           if (
//             typeof json === "object" &&
//             json !== null &&
//             "errors" in json &&
//             Array.isArray((json as { errors: Array<{ message?: string }> }).errors)
//           ) {
//             const first = (json as { errors: Array<{ message?: string }> }).errors[0];
//             if (first?.message) msg = first.message;
//           }
//         } catch {
//           // ignore JSON parse error, keep default msg
//         }
//         throw new Error(msg);
//       }

//       setStatus("sent");
//       form.reset();
//     } catch (err: unknown) {
//       setStatus("error");
//       setError(getErrorMessage(err));
//     }
//   }
//   return (
//     <div
//       className="relative h-screen overflow-hidden pb-20 flex flex-col items-center justify-center"
//     >
//       <form
//         className=" flex flex-col overflow-hidden justify-center items-center gap-4 p-4 bg-white/10 rounded-lg"
//         onSubmit={onSubmit}
//         onPointerDownCapture={(e) => e.stopPropagation()}
//         onClickCapture={(e) => e.stopPropagation()}
//         onKeyDownCapture={(e) => e.stopPropagation()}
//       >
//         <input
//           id="name"
//           name="name"
//           type="text"
//           placeholder="Your name"
//           className="w-full border border-gray-300 rounded-md p-2"
//           required
//         />

//         <input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="you@example.com"
//           className="w-full border border-gray-300 rounded-md p-2"
//           required
//         />

//         <input
//           id="funFact"
//           name="funFact"
//           type="text"
//           placeholder="Fun fact about you"
//           className="w-full border border-gray-300 rounded-md p-2"
//           required
//         />

//         <input
//           id="favFood"
//           name="favFood"
//           type="text"
//           placeholder="Favourite food"
//           className="w-full border border-gray-300 rounded-md p-2"
//           required
//         />

//         <button
//           type="submit"
//           disabled={status === "sending"}
//           className="self-start rounded-full outline bg-primary px-6 py-2 font-medium text-gray-300 border-gray-300 disabled:opacity-60"
//         >
//           {status === "sending" ? "Sending..." : "Submit"}
//         </button>

//         {status === "sent" && (
//           <p className="text-green-600 text-sm">Thanks! Your message has been sent.</p>
//         )}
//         {status === "error" && (
//           <p className="text-red-600 text-sm">Error: {error}</p>
//         )}
//       </form>
//     </div>
//   );
// }

// function getErrorMessage(err: unknown): string {
//   if (err instanceof Error) return err.message;
//   return "Something went wrong";
// }
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileAnalytics,
  IconMail,
} from "@tabler/icons-react";
import { Send } from "lucide-react";

// Simple message type
type Msg = { role: "user" | "ai"; content: string };

export default function ConnectChat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      content:
        "Hey! I’m your friendly portfolio AI. Tell me about your project, goals, or just say hi — I’ll reply right away. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function simulateAIResponse(userText: string) {
    setTyping(true);

    // Lightweight, friendly reply logic
    const canned: string[] = [
      "Awesome — tell me a bit more. What timeline are you aiming for?",
      "Got it! What problem are you trying to solve?",
      "Love that. What does success look like for you?",
      "Thanks for sharing! Any preferred tech stack or vibe?",
    ];

    // Sprinkle the fun fact on first turn or when user says hi
    const funFact =
      "Fun fact: pizza with sunset is something that never goes off. 🍕🌅";

    const lower = userText.toLowerCase();
    const openers = ["hi", "hello", "hey", "yo", "hola", "howdy", "sup"];
    const isGreeting = openers.some((w) => lower === w || lower.startsWith(w + " "));

    const response = isGreeting
      ? `${funFact}\n\nHow can I help you today?`
      : `${canned[Math.floor(Math.random() * canned.length)]}`;

    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", content: response }]);
      setTyping(false);
    }, 600);
  }

  function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    simulateAIResponse(text);
  }

  const suggestions = [
    "I’d like to collaborate",
    "Can you review my portfolio?",
    "Let’s build something fun",
    "Do you take freelance work?",
  ];

  // Simple social links for icons only
  const links = [
    { title: "Resume", href: "/Disha_Jadav_Resume.pdf", Icon: IconFileAnalytics },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/disha-jadav-606484209/", Icon: IconBrandLinkedin },
    { title: "Email", href: "mailto:dishajadav12402@gmail.com", Icon: IconMail },
    { title: "Twitter", href: "https://x.com/diishaa12_", Icon: IconBrandX },
    { title: "GitHub", href: "https://github.com/dishajadav12", Icon: IconBrandGithub },
  ];

  return (
    <div className="relative w-full overflow-hidden ">
      

      {/* Header */}
      <header className="mx-auto w-full max-w-3xl px-4 pt-20 pb-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white/90">
          Let’s connect
        </h1>
        <p className="mt-3 text-white/70">
      Send me a quick message and I&apos;ll follow up personally. Share your idea, scope, or just say hello.
        </p>
        <p className="mt-2 text-sm text-white/60">
          {"("}Hint: {""}
          <span className="font-medium">pizza + sunset</span> is unbeatable.
        </p>
        {/* Icon-only social links */}
        <div className="mt-5 flex justify-center gap-3">
          {links.map(({ title, href, Icon }) => (
            <a
              key={title}
              href={href}
              aria-label={title}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <Icon className="h-5 w-5 text-white/80 group-hover:text-white" />
            </a>
          ))}
        </div>
      </header>

      {/* Fun fact banner */}
      <div className="mx-auto mt-4 w-full max-w-3xl px-4">
        <div className="mb-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-3 text-center text-sm text-white/80">
          🍕 Fun fact: <span className="font-medium">pizza with sunset is something that never goes off</span>.
        </div>
      </div>

 

      {/* Footer note */}
         
    </div>
  );
}
