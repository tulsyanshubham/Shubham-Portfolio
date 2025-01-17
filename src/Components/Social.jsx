import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

const Social = () => {
  
 const links=[
  {
    id:1,
    child:(
      <>
      Linkdin <FaLinkedin size={30}/>
      
      </>
    ),
    href: 'https://www.linkedin.com/in/shubham-tulsyan-a5750a288/',
    style: 'rounded-tr-md'
  },
  {
    id:2,
    child:(
      <>
      GitHub <FaGithub size={30}/>
      
      </>
    ),
    href: 'https://web.whatsapp.com/',
    
  },
  {
    id:3,
    child:(
      <>
      Mail <HiOutlineMail size={30}/>
      
      </>
    ),
    href: 'mailto:tulsyanshubham3639@gmail.com',
    
  },
  {
    id:4,
    child:(
      <>
      Resume <BsFillPersonLinesFill size={30}/>
      
      </>
    ),
    href: '/Resume.pdf',
   
    download: true,
   
  },
 ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {
          links.map(({id,child,href,style,download})=>(
            <li key={id} className={'flex justify-betweenitems-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-700' + " " + style}>
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download}
            target='_blank'
            >
            {child}
            </a>
          
          </li>

          ))}
      
        </ul>

    </div>
  );
};

export default Social