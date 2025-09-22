import Image from 'next/image';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section container mx-auto py-20">
       <div className="absolute left-0 -z-10">
              <Image src={"/images/Hyperspace-tv.svg"} alt="" width={800} height={800} />
            </div>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-3">Feel free to reach out via email: <a href="mailto:you@example.com" className="text-primary">you@example.com</a></p>
    </section>
  );
}
