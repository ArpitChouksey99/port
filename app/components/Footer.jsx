import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

import { SiLeetcode } from "react-icons/si";
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div>
        <Image src={isDarkMode?assets.darklogo:assets.newlogo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6'/>
            arpitchouksey99@gmail.com
        </div>
      </div>
      
      <div className='text-center sm:f;ex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2026 Arpit Chouksey. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><i className="fa-brands fa-github"></i> <a target='_blank' href="https://github.com/ArpitChouksey99">GitHub</a></li>
            <li><i className="fa-brands fa-linkedin"></i> <a target='_blank' href="https://www.linkedin.com/in/arpit-chouksey-9647a5220/">LinkedIn</a></li>
<li>
  <SiLeetcode className="inline mr-1 mb-2 text-base" />
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://leetcode.com/u/Arpit_Chouksey/"
  >LeetCode
  </a>
</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
