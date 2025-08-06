import React from 'react'
import Projects from '@/components/Projects';

function Games() {
  return (
    <div className=''>
        <div className='container mx-auto px-14 py-6 flex flex-col items-start '>
        <div>
             {/* 1st div */}
          <div>
            <h1 className="text-4xl font-bold mb-4 hover:cursor-pointer hover:animate-pulse">
              <span className="text-6xl text-red-600">O</span>UR{" "}
              <span className="text-6xl text-red-600">P</span>ROJECT
            </h1>
          </div>
          {/* 2nd */}
        </div>
          <Projects/>
        </div>
      
    </div>
  )
}

export default Games;