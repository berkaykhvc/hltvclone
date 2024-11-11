import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex w-full h-12 bg-gray-400 items-center'>
        <div className='flex gap-10'>
            <div className=''>
                News
            </div>
            <div>
                Matches
            </div>
            <div>
                Results
            </div>
            <div>
                Events
            </div>
            <div>
                Players
            </div>
            <div>
                Stats
            </div>
            <div>
                Fantasy
            </div>
            <div>
                Forum
            </div>
            <div>
                Media
            </div>
            <div>
                Live
            </div>
            <div>
                Major
            </div>
        </div>
    </nav>
  )
}

export default NavBar