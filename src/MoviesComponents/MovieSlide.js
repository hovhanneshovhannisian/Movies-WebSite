import React, { useState } from 'react'
import Movie from './Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { useSelector } from 'react-redux'
import { selectWatchList } from '../Redux/WatchListSlice'
import { selectMovies } from '../Redux/MoviesSlice';



function MovieSlide() {
  const movies = useSelector(selectMovies)
  const watchList = useSelector(selectWatchList)
  const [slidesPerViewResp, setSlidesPerViewResp] = useState(4)

  // Slider count changing on different devices
  const a = () => {
    if (window.innerWidth <= 500 ) {
      setSlidesPerViewResp(1)
    } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
      setSlidesPerViewResp(2)
    } else if (window.innerWidth > 700 && window.innerWidth <= 900) {
      setSlidesPerViewResp(3)
    } else if (window.innerWidth > 900) {
      setSlidesPerViewResp(4)
    }
  }
  window.addEventListener("load",a)
  window.addEventListener("resize",a)
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

  const newMovieItems = newMovies.map((movie, index) => {
    return (
      <SwiperSlide key={index}>
        <Movie {...movie} key={movie.id}/>
      </SwiperSlide>
    )
  })

  return (
    <div className='sliderMovies' id='slider-bottom-border'>
      <h2>The Movies Of {curYear}</h2>
      <div className='MySlider'>
        <Swiper
          className="mySwiper"
          slidesPerView={slidesPerViewResp}
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
    </div>

  )
}

export default MovieSlide