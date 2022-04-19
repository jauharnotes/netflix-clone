import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo netflix"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className='hidden md:flex gap-5'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
        </ul>
      </div>
    </header>
  )
}
