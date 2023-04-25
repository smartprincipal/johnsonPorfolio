import Image from 'next/image'
import React from 'react'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import nextjs from '../public/assets/skills/nextjs.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import typescript from '../public/assets/skills/typescript.png'
import firebase from '../public/assets/skills/firebase.png'
import tailwind from '../public/assets/skills/tailwind.png'
import github1 from '../public/assets/skills/github1.png'


const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
     <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Skills</p>
      <h2 className='py-4'>What I Can Do</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={html} alt='html' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>HTML</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={css} alt='css' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>CSS</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={javascript} alt='javascript' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>JAVASCRIPT</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={react} alt='react' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>REACT</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={nextjs} alt='nextjs' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>NEXTJS</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={tailwind} alt='tailwind' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>TAILWIND</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={firebase} alt='firebase' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>FIREBASE</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={typescript} alt='typescript' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>TYPESCRIPT</h3>
          </div>
         </div>

        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
         <div className='grid grid-col-2 gap-4 justify-center items-center md:flex'>
          <div className='m-auto'>
           <Image src={github1} alt='github1' className='w-[64px] h-[64px]'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <h3>GITHUB</h3>
          </div>
         </div>

        </div>



      </div>
     </div>

    </div>
  )
}

export default Skills