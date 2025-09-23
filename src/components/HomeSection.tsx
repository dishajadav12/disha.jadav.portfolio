import Image from 'next/image';
import React from 'react';

export default function HomeSection() {
  return (
    <section id="home" className="section container  py-20">
     <div className="absolute top-30 left-20 -z-10">
      <div className="motion-safe:animate-[spin_220s_linear_infinite] hover:[animation-play-state:paused]">
        <Image src="/images/saturn.svg" alt="Saturn" width={300} height={300} />
      </div>
    </div>
      <h1 className="text-4xl font-bold">Hi, I&apos;m Disha</h1>
      <p className="mt-4 text-lg text-muted-foreground">A frontend developer building beautiful web experiences.</p>
       <div className='absolute -bottom-18 right-10 -z-10'>
           <div className="motion-safe:animate-[spin_220s_linear_infinite] hover:[animation-play-state:paused]">

        <Image src={'/images/ufo.svg'} alt='' width={400} height={400}/>

        </div>
      </div>
            

    </section>
  );
}
