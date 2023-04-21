import Image from 'next/image'
import { Movie } from "@/typings";
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState, movieState } from '@/atoms/modalAtom'

interface Props {
  movie: Movie 
}

const Thumbnails = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)


  return (
    <div
     className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
       onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
      className="rounded-sm object-cover md:rounded"
      fill alt=''
       />
    </div>
  )
}

export default Thumbnails;