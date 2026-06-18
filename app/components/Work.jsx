// import { workData } from '@/assets/assets'
// import React, { useRef } from 'react'
// import Image from 'next/image'
// import { motion } from "motion/react"

// const Work = () => {

//   const scrollRef = useRef(null)

//   const slideRight = () => {
//     if (!scrollRef.current) return
//     scrollRef.current.scrollBy({
//       left: 380,
//       behavior: "smooth"
//     })
//   }

//   return (
//     <motion.div
//       id="work"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className='w-full px-[12%] py-16 scroll-mt-16'
//     >

//       {/* ===== Headings ===== */}
//       <h4 className='text-center mb-2 text-lg font-Ovo
//       text-gray-700 dark:text-gray-300'>
//         My portfolio
//       </h4>

//       <h2 className='text-center text-5xl font-Ovo
//       text-gray-900 dark:text-white'>
//         My latest work
//       </h2>

//       <p className='text-center max-w-xl mx-auto mt-5 mb-14
//       text-gray-600 dark:text-gray-400'>
//         Projects showcasing AI integration, full-stack development,
//         and modern web experiences.
//       </p>

//       {/* ===== Slider ===== */}
//       <div
//         ref={scrollRef}
//         className='flex gap-8 overflow-x-auto no-scrollbar py-10'
//       >

//         {workData.map((project, index) => (

//           <motion.div
//             key={index}
//             whileHover={{ y: -12, scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 180 }}
//             className='w-[360px] min-h-[500px] flex-shrink-0
//             rounded-2xl p-5 flex flex-col
//             transition-all duration-300

//             /* LIGHT THEME */
//             bg-white
//             border border-gray-200
//             shadow-md hover:shadow-xl

//             /* DARK THEME (unchanged beautiful version) */
//             dark:bg-white/5
//             dark:border-white/10
//             dark:backdrop-blur-xl
//             dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
//             dark:hover:border-purple-400/40
//             dark:hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)]'
//           >

//             {/* Image */}
//             <div className='relative w-full h-[210px] rounded-xl overflow-hidden mb-6'>
//               <Image
//                 src={project.bgImage}
//                 alt={project.title}
//                 fill
//                 className='object-cover'
//               />
//             </div>

//             {/* Title */}
//             <h2 className='text-xl font-semibold
//             text-gray-900 dark:text-white'>
//               {project.title}
//             </h2>

//             {/* Description */}
//             <p className='text-sm mt-3 leading-relaxed
//             text-gray-600 dark:text-gray-400'>
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className='flex flex-wrap gap-2 mt-5'>
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className='text-xs px-3 py-1 rounded-full
//                   bg-gray-100 text-gray-700
//                   dark:bg-white/10 dark:text-gray-300
//                   dark:border dark:border-white/10'>
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <div className='flex-grow'></div>

//             {/* GitHub Button */}
//             <div className='flex justify-center mt-8'>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 className='flex items-center gap-3 px-6 py-2 rounded-full
//                 text-sm font-medium transition duration-300

//                 /* LIGHT */
//                 border border-gray-900 text-gray-900
//                 hover:bg-gray-900 hover:text-white

//                 /* DARK */
//                 dark:border-white/20 dark:text-gray-200
//                 dark:hover:bg-purple-500
//                 dark:hover:border-purple-500'
//               >
//                 View on GitHub
//                 <i className="fa-brands fa-github text-xl"></i>
//               </a>
//             </div>

//           </motion.div>
//         ))}
//       </div>

//       {/* ===== Slide Button ===== */}
//       <div className='flex justify-center mt-6'>
//         <button
//           onClick={slideRight}
//           className='px-10 py-3 rounded-full transition duration-300

//           /* LIGHT */
//           border border-gray-800 text-gray-800
//           hover:bg-gray-900 hover:text-white

//           /* DARK */
//           dark:border-white/20 dark:text-gray-200
//           dark:hover:bg-purple-500 dark:hover:border-purple-500'
//         >
//           Slide →
//         </button>
//       </div>

//     </motion.div>
//   )
// }

// export default Work


import { workData } from '@/assets/assets'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const Work = () => {
  const scrollRef = useRef(null)

  const slideRight = () => {
    if (!scrollRef.current) return

    const card = scrollRef.current.querySelector('.project-card')

    if (card) {
      const gap = window.innerWidth < 640 ? 16 : 32

      scrollRef.current.scrollBy({
        left: card.offsetWidth + gap,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.div
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-10 lg:px-[12%] py-16 scroll-mt-16"
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo text-gray-700 dark:text-gray-300">
        My Portfolio
      </h4>

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white">
        My Latest Work
      </h2>

      <p className="text-center max-w-xl mx-auto mt-4 mb-10 sm:mb-14 text-sm sm:text-base text-gray-600 dark:text-gray-400">
        Projects showcasing AI integration, full-stack development,
        and modern web experiences.
      </p>

      {/* Projects Slider */}
      <div
        ref={scrollRef}
        className="
          flex
          gap-4
          sm:gap-8
          overflow-x-auto
          overflow-y-hidden
          no-scrollbar
          py-4
          sm:py-10
          snap-x
          snap-mandatory
          scroll-smooth
        "
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              project-card
              snap-center

              w-[calc(100vw-32px)]
              sm:w-[360px]

              min-h-[420px]
              sm:min-h-[500px]

              flex-shrink-0
              rounded-2xl

              p-4
              sm:p-5

              flex flex-col

              bg-white
              border border-gray-200
              shadow-md
              hover:shadow-xl

              transition-all duration-300

              dark:bg-white/5
              dark:border-white/10
              dark:backdrop-blur-xl
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              dark:hover:border-purple-400/40
              dark:hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)]
            "
          >
            {/* Project Image */}
            <div className="relative w-full h-[180px] sm:h-[210px] rounded-xl overflow-hidden mb-4 sm:mb-6">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm mt-2 sm:mt-3 leading-6 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full

                    bg-gray-100
                    text-gray-700

                    dark:bg-white/10
                    dark:text-gray-300
                    dark:border
                    dark:border-white/10
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex-grow"></div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-5 sm:mt-8">
              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2

                  px-5 py-2
                  rounded-full

                  text-sm font-medium

                  border border-gray-900
                  text-gray-900

                  hover:bg-gray-900
                  hover:text-white

                  transition-all duration-300

                  dark:border-white/20
                  dark:text-gray-200
                  dark:hover:bg-white
                  dark:hover:text-black
                "
              >
                GitHub
                <i className="fa-brands fa-github text-lg"></i>
              </a>

              {/* Live Demo */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2

                    px-5 py-2
                    rounded-full

                    text-sm font-semibold
                    text-white

                    bg-gradient-to-r
                    from-violet-600
                    via-purple-600
                    to-fuchsia-600

                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-purple-500/40

                    transition-all duration-300
                  "
                >
                  <span className="animate-pulse">●</span>
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Next Project Button - Mobile + Desktop */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button
          onClick={slideRight}
          className="
            flex items-center gap-2

            px-6 sm:px-10
            py-3

            rounded-full

            text-sm sm:text-base
            font-medium

            border border-gray-800
            text-gray-800

            hover:bg-gray-900
            hover:text-white

            transition-all duration-300

            dark:border-white/20
            dark:text-gray-200
            dark:hover:bg-purple-500
            dark:hover:border-purple-500
          "
        >
          Next Project →
        </button>
      </div>
    </motion.div>
  )
}

export default Work