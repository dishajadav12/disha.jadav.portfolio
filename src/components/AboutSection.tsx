import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="section container">
      <div className="absolute left-0 -z-10 pt-44">
        <Image src={"/images/rocket.svg"} alt="" width={800} height={800} />
      </div>
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-3 text-base">
        I&apos;m a passionate developer focused on creating accessible,
        performant React applications.
      </p>
    </section>
  );
}
