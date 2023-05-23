import React from "react";
import Image from "next/image";
import logo from "../public/image/logo.png";
import Link from "next/link";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="nav-box">
      <Image src={logo} alt="logo/png" className="logo" />
      <div className="menu-box">
        <ul className="menu-list">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Material</Link>
          </li>
          <li>
            <Link href="">Batches</Link>
          </li>
          <li>
            <Link href="">Quick Links</Link>
            <div>
              <ul className="sub-menu">
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="">Others</Link>
          </li>
          <Link href="">
            <button className="text-white text-2xl rounded-xl bg-orange-700 w-32 h-10 hover:bg-orange-600 transition " >
              Logout
            </button>
          </Link>
        </ul>
      </div>
      {/* <div className="ham-menu flex items-center ">
         <FontAwesomeIcon className='text-orange-700 text-4xl' icon={faBars} />
        </div> */}
    </div>
  );
}
export default Navbar;
