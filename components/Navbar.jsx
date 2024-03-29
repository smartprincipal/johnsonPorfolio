import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [nav, setNav] =useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] =useState('#1f2937');
  const router =useRouter();

  useEffect(()=> {
    if(
      router.asPath === '/evogym'||
      router.asPath === '/mbbpil'||
      router.asPath === '/easyrent'||
      router.asPath === '/tompurse'||
      router.asPath === '/ehya'||
      router.asPath === '/afrosound'||
      router.asPath === 'getsavey'
    )
    {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }else{
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937')
    }

  }, [router])

  const handleNav = () =>{
    setNav(!nav)
  };
  useEffect(() => {
    const handleShadow =() =>{
      if (window.scrollY >= 90){
        setShadow(true);
      }else{
        setShadow(false);
      }
    };
    window.addEventListener('scroll' , handleShadow);
  }, []);
  return (
    <div
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
    : 'fixed w-full h-20 z-[100]'}>
      {/* NAVIGATION BAR */}
      <div className='flex justify-between items-center w-full h-full px-2 
      2xl:px-16'>
        {/* LOGO */}

        <Link href='/'>
        <h2 className='text-[#5651e5] uppercase'>Johnson</h2>
        <p className='text-center'>Portfolio</p>
        </Link>
        {/* <Image 
        src="/../public/assets/navLogo.png"
         alt="/" 
         width='80' 
         height='50' /> */}

          {/* MENU */}
         <div>
          <ul
          style={{color:`${linkColor}`}}
           className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm hover:border-b uppercase'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm hover:border-b uppercase'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm hover:border-b uppercase'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm hover:border-b uppercase'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm hover:border-b uppercase'>Contact</li>
            </Link>
          </ul>

          {/* HAMBURGER */}
         <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25}/>
         </div>
         </div>

         {/* MOBILE SCREEN NAVIGATION BAR */}
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        {/* side Drawer */}
        <div className={
          nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
        : 
        'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
          
          <div className='flex w-full items-center justify-between'>
          <Link href='/'>
        <h2 className='text-[#5651e5] uppercase'>Johnson</h2>
        <p className='text-center'>Portfolio</p>
        </Link>
            <div 
            onClick={handleNav} 
            className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose/>
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>I build tools that profers solution </p>
          </div>
        <div className='p-4 flex flex-col'>
          <ul className='uppercase'>
          <Link href='/'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm hover:text-[42px]'>Home</li>
            </Link>
            <Link href='/#about'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm hover:text-[42px]'>About</li>
            </Link>
            <Link href='/#skills'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm hover:text-[42px]'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm hover:text-[42px]'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm hover:text-[42px]'>Contact</li>
            </Link>
          </ul>
          <div className='pt-40 '>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

              <a href='linkedin.com/in/johnson-oluwayemi-b85290110'
              target='_blank'
              rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn/>
                </div>
                </a>
                
                <a
              href='https://github.com/smartprincipal'
              target='_blank'
              rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub/>
                </div>
                 </a>

                 <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail/>
                </div>
                 </Link>

                 <Link href='/resume'>
                <div className='rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill/>
                </div>
                 </Link>

              </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar