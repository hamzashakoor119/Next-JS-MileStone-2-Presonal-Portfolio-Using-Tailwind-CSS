import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Techonolohies I Work With</h2>
          <p className='text-gray-500 pt-2'>
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-white text-3xl sm:text-4xl'>
            
            <div className='space-y-3'>
              <h2 className='bg-blue-500 rounded border-2 border-accent w-[55%] h-[30%] pl-2'>HTML</h2>
              <h2 className='bg-blue-500 rounded border-2 border-accent w-[55%] h-[30%] pl-2'>Python</h2>
              <h2 className='bg-blue-500 rounded border-2 border-accent w-[55%] h-[30%] pl-2'>Node JS</h2>
            </div>

            <div className='space-y-2'>
              <h2 className='bg-blue-500 rounded border-2 border-accent w-[55%] h-[30%] pl-2'>CSS</h2>
              <h2 className='bg-blue-500 rounded border-2 border-accent w-[55%] h-[30%] pl-2'>TypeScript</h2>
              <h2 className='bg-blue-500 rounded border-2 border-accent w-[55%] h-[30%] pl-2'>Next JS</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills