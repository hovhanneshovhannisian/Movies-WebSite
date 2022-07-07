import React from 'react'
import movies from '../data/data'
import Movie from './Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

function MovieSlide() {
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