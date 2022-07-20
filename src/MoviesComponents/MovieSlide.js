import React, { useContext } from 'react'
import movies from '../data/data'
import Movie from './Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { GlobalContext } from '../context/GlobalState'


function MovieSlide() {

  const { watchList } = useContext(GlobalContext)

  if (watchList.length > 0) {
    movies.forEach((movie, index) => {
      for (let i = 0; i < watchList.length; i++) {
        if (watchList[i].id === movie.id) {
          movies[index] = watchList[i]
        }
      }
    })
  }
  const date = new Date()
  const curYear = date.getFullYear()
  const newMovies = movies.filter((movie) => Number(movie.release) === curYear)


  const newMovieItems = newMovies.map((movie) => {
    return (
      <SwiperSlide key={movie.id}>
        <Movie {...movie} />
      </SwiperSlide>)
  })

  return (
    <div className='sliderMovies' id='slider-bottom-border'>
      <h2>The Movies Of {curYear}</h2>
      <Swiper
        className="mySwiper"
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {newMovieItems}
      </Swiper>
    </div>

  )
}

export default MovieSlide