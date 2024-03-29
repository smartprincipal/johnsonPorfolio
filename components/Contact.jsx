import React from 'react'
import { useForm } from 'react-hook-form'
import contact from '../public/assets/me2.jpg'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  const {register, trigger, formState:{errors}} = useForm();

  const onSubmit= async (e) => {
    const isValid = await trigger ();
    if(!isValid) {
      e.preventDefault();
    }
  }



  return (
    <div id='contact' className='w-full lg:h-screen'>
     <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
      <h2 className='py-4'>Get In Touch</h2>

      <div className='grid lg:grid-cols-5 gap-8'>

       {/* LEFT */}
       <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='lg:p-4 h-full'>
         <div>
          <Image src={contact} alt="" className='rounded-xl hover:scale-105 ease-in duration-300' />
         </div>
         <div>
          <h2 className='py-2'>Johnson Oluwayemi</h2>
          <p>Font-End Developer</p>
          <p className='py-4'>I am available for gigs, full-time or remote positions. Contact me and let's talk. </p>
         </div>
         <div>
          <div>
           <p className='uppercase pt-8 '>Connect with me</p>

           <div className='flex items-center justify-between py-4'>
           <a href='https://linkedin.com/in/johnson-oluwayemi-b85290110'
              target='_blank'
              rel='noreferrer'>
           <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn/>
           </div>
           </a>

           <a
              href='https://github.com/smartprincipal'
              target='_blank'
              rel='noreferrer'>
           <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub/>
           </div>
            </a>

            <Link href='/#contact'>
           <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail/>
           </div>
            </Link>

            <Link href='/resume'>
           <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsFillPersonLinesFill/>
           </div>
            </Link>
           </div>
          </div>
         </div>
        </div>

       </div>
        {/* RIGHT SIDE */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
         <div className='p-4'>
          <form
          target='_blank'
          onSubmit={onSubmit}
          method='POST'
           action="https://formsubmit.co/westsideyjay@gmail.com">
           <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
             <label 
             className='uppercase text-sm py-2'>
              Name
             </label>

             <input 
             className='border-2 rounded-lg p-3 flex border-gray-300' 
             type="text"
             {...register("name" , {
              required: true,
              maxLength:100,
             })} 
             />
             {errors.name && (
         <p className='mt-1 text-[red]'>
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Too long."}

         </p>
        )}
            </div>

            <div className='flex flex-col'>
             <label 
             htmlFor="" 
             className='uppercase text-sm py-2'>
              Phone Number
              </label>

             <input 
             className='border-2 rounded-lg p-3 flex border-gray-300' 
             type="text" 
             {...register("phoneNumber" , {
              required: true,
              maxLength:11,
             })}
             />
             {errors.phoneNumber && (
         <p className='mt-1 text-[red]'>
            {errors.phoneNumber.type === "required" && "This field is required."}
            {errors.phoneNumber.type === "maxLength" && "Too long."}

         </p>
        )}
            </div>
           </div>

           <div className='flex flex-col py-2'>
           <div className='flex flex-col'>
             <label 
             htmlFor="" 
             className='uppercase text-sm py-2'>
              Email
              </label>
             <input 
             className='border-2 rounded-lg p-3 flex border-gray-300' 
             type="email" 
             {...register("email" , {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
             })}
             />
             {errors.email && (
         <p className='mt-1 text-[red]'>
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}

         </p>
        )}
            </div>
           </div>

           <div className='flex flex-col py-2'>
           <div className='flex flex-col'>
             <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
             <input 
             className='border-2 rounded-lg p-3 flex border-gray-300' 
             type="text" 
             {...register("subject" , {
              required: true,
              maxLength:50,
             })} />
             {errors.subject && (
         <p className='mt-1 text-[red]'>
            {errors.subject.type === "required" && "This field is required."}
            {errors.subject.type === "maxLength" && "Too long."}

         </p>
        )}
            </div>
           </div>
           <div className='flex flex-col py-2'>
           <div className='flex flex-col'>
             <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
             <textarea 
             className='border-2 rounded-lg p-3  border-gray-300' 
             rows='10'
             {...register("message" , {
              required: true,
              maxLength:1500,
             })} 
             ></textarea>
             {errors.message && (
         <p className='mt-1 text-[red]'>
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "maxLength" && "Too long."}

         </p>
        )}
            </div>
           </div>

           <button className='w-full p-4 text-gray-100 mt-4'> Send Message</button>
          </form>
         </div>

        </div>

      </div>
      <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
              </div>
            
          </Link>
        </div>
     </div>
    </div>
  )
}

export default Contact