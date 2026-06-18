// import React from 'react'
// import Image from 'next/image'
// import { assets, infoList, toolsData } from '@/assets/assets'
// import { motion, scale } from "motion/react"



// const About = ({isDarkMode}) => {
//   return (
//     <motion.div className='w-full px-[12%] py-10 scroll-mt-16' id='about'
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}>
      
//       <motion.h4
//       initial={{opacity:0,y:-20}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.5,delay:0.3}}
//      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      
//       <motion.h2 
//       initial={{opacity:0,y:-20}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.5,delay:0.5}}
//       className='text-center text-5xl font-Ovo'>About Me</motion.h2>

//       <motion.div 
//       initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.8}}
//       className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

//         <motion.div 
//         initial={{opacity:0,scale:0.9}}
//     whileInView={{opacity:1,scale:1}}
//     transition={{duration:0.6}}
//         className='w-64 sm:w-80 rounded-3xl max-w-none'>
//             <Image src={assets.newpro2} alt='user' className='w-full rounded-3xl '/>
//         </motion.div>

//         <motion.div 
//         initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.6,delay:0.8}}
//         className='flex-1'>
//             <p className='mb-10 max-w-2xl font-Ovo'>I am a Full Stack Web Developer with a background in Computer Science, passionate about building modern and responsive web applications. I enjoy working across both frontend and backend technologies, focusing on performance, scalability, and clean design. I continuously learn and build projects to improve my skills and create meaningful digital experiences.</p>
//                 <motion.ul 
//                 initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.6,delay:1}}
//                 className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
//                     {infoList.map(({icon,iconDark,title,description},index)=>(
//                         <motion.li 
//                         whileHover={{scale:1.05}}
//                         className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
//                             <Image src={isDarkMode?iconDark:icon} className='w-7 mt-3' alt='title'/>
//                             <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                             <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
//                         </motion.li>
//                     ))}
//                 </motion.ul>
//                 <motion.h4 
//                 initial={{y:20,opacity:0}}
//     whileInView={{y:0,opacity:1}}
//     transition={{delay:1.3,duration:0.6}}
//                 className='dark:text-white/80'>Tools I use</motion.h4>

//                 <motion.ul 
//                 initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{delay:1.5,duration:0.6}}
//                 className='flex items-center gap-3 sm:gap-5'>
//                     {toolsData.map((tool,index)=>(
//                         <motion.li 
//                         whileHover={{scale:1.1}}
//                         className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
//                             <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
//                         </motion.li>
//                     ))}
//                 </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default About
import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      className='w-full px-[6%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-16'
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-base sm:text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      {/* Main content — stacks vertically on mobile, side-by-side on lg+ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 my-10 sm:my-16 lg:my-20'
      >
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-48 sm:w-64 lg:w-80 rounded-3xl flex-shrink-0'
        >
          <Image
            src={assets.newpro2}
            alt='Profile photo'
            className='w-full rounded-3xl object-cover'
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 w-full'
        >
          <p className='mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl font-Ovo leading-relaxed dark:text-white/80'>
            I am a Full Stack Web Developer with a background in Computer Science,
            passionate about building modern and responsive web applications. I enjoy
            working across both frontend and backend technologies, focusing on
            performance, scalability, and clean design. I continuously learn and
            build projects to improve my skills and create meaningful digital
            experiences.
          </p>

          {/* Info cards — single column on xs, 3 columns on sm+ */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mb-8 sm:mb-10'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer
                           hover:bg-lightHover hover:-translate-y-1 duration-500
                           hover:shadow-black dark:border-white
                           dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  className='w-6 sm:w-7 mt-2 sm:mt-3'
                  alt={title}
                />
                <h3 className='my-3 sm:my-4 font-semibold text-sm sm:text-base text-gray-700 dark:text-white'>
                  {title}
                </h3>
                <p className='text-gray-600 text-xs sm:text-sm dark:text-white/80'>
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools label */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className='mb-3 sm:mb-4 text-sm sm:text-base font-Ovo dark:text-white/80'
          >
            Tools I use
          </motion.h4>

          {/* Tools list — wraps naturally on small screens */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-10 sm:w-12 lg:w-14
                           aspect-square border border-gray-400 rounded-lg
                           cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-6 lg:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About