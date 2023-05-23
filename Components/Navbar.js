import React from 'react'
import Image from 'next/image'
import logo from "../public/image/logo.png"
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <div className='nav-box'>
      <Image src={logo} alt='logo/png' className="logo"/>
      <div className="menu-box">
        <ul className="menu-list">
          <Link href="/"><li>Home</li></Link>
          <Link href="#about"><li>About</li></Link>
          <Link href="#faculty"><li>Faculty</li></Link>
          <Link href="/#gallery"><li>Gallery</li></Link>
          <Link href="/#team"><li>Team</li></Link>
          <Link href="/register"><button className='text-white text-2xl rounded-xl bg-orange-700 w-32 h-10 hover:bg-orange-600 transition '>Sign Up</button></Link>
        </ul>
      </div>
      {/* <div className="ham-menu flex items-center ">
         <FontAwesomeIcon className='text-orange-700 text-4xl' icon={faBars} />
        </div> */}
    </div>
  )
}
export default Navbar