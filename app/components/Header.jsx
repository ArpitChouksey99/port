// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/assets/assets'
// import { motion } from "motion/react"

// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen mx-auto h-screen flex flex-col items-center justify-center gap-4'>
//       <motion.div
//       initial={{scale:0}}
//       whileInView={{scale:1}}
//       transition={{duration:0.8, type:'spring', stiffness:100}}
//       >
//         <Image src={assets.newpro} alt='' className='rounded-full mt-4 w-32 dark:mt-8' />
//       </motion.div>

//       <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
//       initial={{y:-20,opacity:0}}
//       whileInView={{y:0,opacity:1}}
//       transition={{duration:0.6,delay:0.3}}
//       >Hi! I'am Arpit Chouksey <Image src={assets.hand_icon} alt='' className='w-6'/> </motion.h3>

//       <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
//        initial={{y:-20,opacity:0}}
//       whileInView={{y:0,opacity:1}}
//       transition={{duration:0.6,delay:0.5}}
//       >Full Stack web devloper based in Jabalpur.</motion.h1>

//       <motion.p className='max-w-2xl mx-auto font-Ovo'
//       initial={{opacity:0}}
//       whileInView={{opacity:1}}
//       transition={{duration:0.6,delay:0.7}}
//       >
//         I build modern, responsive, and high-performance web applications using modern technologies. Passionate about creating seamless user experiences and scalable backend systems, I focus on writing clean, efficient code that turns ideas into real-world digital products.</motion.p>
//       <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

//         <motion.a
//          initial={{y:30,opacity:0}}
//       whileInView={{y:0,opacity:1}}
//       transition={{duration:0.6,delay:1}}
//         className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent' href="#contact">Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

//         <motion.a 
//          initial={{y:30,opacity:0}}
//       whileInView={{y:0,opacity:1}}
//       transition={{duration:0.6,delay:1.2}}
//          href="/arp_res.pdf"
//   download="Arpit_Resume.pdf"   className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'>My resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>

//       </div>
//     </div>
//   )
// }

// export default Header

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 sm:pt-24 pb-10'>

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.newpro}
          alt='Arpit Chouksey'
          className='rounded-full w-24 sm:w-28 md:w-32'
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        className='flex items-center justify-center flex-wrap gap-2 text-lg sm:text-xl md:text-2xl mb-1 font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I&apos;m Arpit Chouksey
        <Image src={assets.hand_icon} alt='wave' className='w-5 sm:w-6' />
      </motion.h3>

      {/* Main headline */}
      <motion.h1
        className='text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-tight'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Full Stack Web Developer based in Jabalpur.
      </motion.h1>

      {/* Bio */}
      <motion.p
        className='max-w-2xl mx-auto font-Ovo text-sm sm:text-base leading-relaxed dark:text-white/80'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I build modern, responsive, and high-performance web applications using
        modern technologies. Passionate about creating seamless user experiences
        and scalable backend systems, I focus on writing clean, efficient code
        that turns ideas into real-world digital products.
      </motion.p>

      {/* CTA buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 w-full sm:w-auto'>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='w-full sm:w-auto px-8 py-3 border border-white rounded-full
                     bg-black text-white flex items-center justify-center gap-2
                     dark:bg-transparent text-sm sm:text-base'
          href="#contact"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Arpit_Resume.pdf"
          download="Arpit_Resume.pdf"
          className='w-full sm:w-auto px-8 py-3 border rounded-full border-gray-500
                     flex items-center justify-center gap-2
                     dark:bg-white dark:text-black text-sm sm:text-base'
        >
          My Resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>

      </div>
    </div>
  )
}

export default Header