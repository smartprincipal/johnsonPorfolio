import Link from 'next/link'
import React from 'react'
import Me from '../public/assets/Me.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
     <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='col-span-2'>
       <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
       <h2 className='py-4'>Who I Am</h2>
       <p className='py-2 text-gray-600'> A Tech Enthusiast And More</p>
       <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React, NextJS, and Typescript. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2016 building landing-page(s) and sales-funnel
            websites on CMS platforms such as WordPress.
          </p>
          <Link href='/#projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
      </div>
      <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
       <Image src={Me} alt="johnson"  className='rounded-xl' />
      </div>

     </div>

    </div>
  )
}

export default About