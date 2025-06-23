import React from 'react'
import Gmp from '../../public/assets/projects/gmp247.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const gmp = () => {
  return (
    <div className='w-full '>
     <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
       <Image src={Gmp} alt='gmp-image' className='absolute z-1' layout='fill' objectFit='cover'/>

       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
        <h2 className='py-2'>Gmp Entertainment</h2>
        <h3>Next Js & Tailwind CSS</h3>
       </div>

      </div>
     </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
       <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
            This app was built using NextJs and tailwind CSS.
          </p>
          <Link href='https://gmpentertainment247.com/'>
      <button className='px-8 py-2 mt-4 mr-8'>Visit website</button>
          </Link>
      <button className='px-8 py-2 mt-4'>Code</button>
       
       </div>
       <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2'>
         <p className='text-center font-bold pb-2'>Technologies</p>
         <div className='grid grid-cols-3 md:grid-cols-1'>
          <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill/> Next Js</p>
          <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill/> Tailwind CSS</p>
          <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill/> Contentful CMS</p>
          <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill/> Restful API </p>
         </div>
        </div>
       </div>
       <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
       </Link>
      </div>
    </div>
  )
}

export default gmp