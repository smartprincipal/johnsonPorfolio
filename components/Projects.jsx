import Image from 'next/image'
import React from 'react'
import Afrosound from '../public/assets/projects/Afrosound.jpg'
import Ehyaa from '../public/assets/projects/Ehyaa.jpg'
import Tompurse from '../public/assets/projects/Tompurse.jpg'
import Easyrent from '../public/assets/projects/Easyrent.jpg'
import MBBPIL from '../public/assets/projects/MBBPIL.jpg'
import fitness from '../public/assets/projects/fitness.jpg'
import Link from 'next/link'
import Projectitem from './Projectitem'



const Projects = () => {
  return (
    <div className='w-full'>
     <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
      <h2 className='py-4'>What I Have Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>

       <Projectitem 
       title='EVOGYM' 
       backgroundImg={fitness} 
       projectUrl='https://fitness-typescript-seven.vercel.app/'
       build='Typescript'
       />

      <Projectitem 
       title='MBBPIL' 
       backgroundImg={MBBPIL} 
       projectUrl='https://mbbpil.vercel.app/'
       build='React'
       />

      <Projectitem 
       title='Easy Rent' 
       backgroundImg={Easyrent} 
       projectUrl='https://easyrentt.vercel.app/'
       build='React'
       />

      <Projectitem 
       title='Tompurse' 
       backgroundImg={Tompurse} 
       projectUrl='https://tompurse.vercel.app/'
       build='Javascript'
       />

      <Projectitem 
       title='Ehya' 
       backgroundImg={Ehyaa} 
       projectUrl='https://ehya.vercel.app/'
       build='HTML & CSS'
       />

<Projectitem 
       title='Afrosound' 
       backgroundImg={Afrosound} 
       projectUrl='https://afrosound.vercel.app/'
       build='HTML & CSS'
       />

      </div>

     </div>

    </div>
  )
}

export default Projects