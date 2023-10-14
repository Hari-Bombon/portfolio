import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink';

const navLinks = [
  {
    title:"About",
    path:"#about",
  },
  {
    title:"Project",
    path:"#project",
  },
  {
    title:"Contact",
    path: "#contact"
  }
]
const Navbar = () => {
  return (
    <nav><div>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={'/'} className="text-2xl text-white font-semibold">
                HP
                </Link>
                <div className='menu-hidden md:block md:w-auto' id='navbar'>
                  <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                      navLinks.map((link , index) => (
                        <li key ={index}>
                          <NavLink href={link.path} title={link.title}/>
                        </li>
                      ))
                    }
                  </ul>
           
        </div>
        </div>
        </div>
        </nav>
  )
}

export default Navbar