import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props {
  netflixOriginals: Movie[]
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="z-20 ml-3 text-2xl font-bold md:ml-7 md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs ml-3 md:max-w-lg md:ml-7 md:text-lg lg:max-w-2xl">
        {movie?.overview}
      </p>

      <div className='flex space-x-3 ml-3 md:ml-7'>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className='text-black'/> Play
        </button>
        <button className='bannerButton bg-[gray]/70'>
          <HiInformationCircle className='h-5 w-5 md:h-8 md:w-8'/>More Info</button>
      </div>
    </div>
  )
}
