import Image from 'next/image';
import React from 'react';

export default function HomeSection() {
  return (
    <section id="home" className="section container mx-auto py-20">
      <div className='absolute top-30 right-20 -z-10'>
        <Image src={'/images/saturn.svg'} alt='' width={300} height={300}/>
      </div>
      <div className='absolute top-64 right-60 opacity-90 -z-10'>
        <Image src={'/images/cloud.svg'} alt='' width={400} height={400}/>
      </div>
      <h1 className="text-4xl font-bold">Hi, I&apos;m Disha</h1>
      <p className="mt-4 text-lg text-muted-foreground">A frontend developer building beautiful web experiences.</p>
       <div className='absolute -bottom-18 left-10 opacity-90 -z-10'>
        <Image src={'/images/ufo.svg'} alt='' width={400} height={400}/>
      </div>
    </section>
  );
}
