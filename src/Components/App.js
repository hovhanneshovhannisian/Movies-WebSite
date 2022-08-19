import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from '../MoviesComponents/Movies';
import Search from '../SearchComponents/Search';
import Searched from '../SearchComponents/Searched';
import MovieSlide from '../MoviesComponents/MovieSlide';
import Footer from './Footer';
import MovieDetailsPage from '../MoviesComponents/MovieDetailsPage';
import Header from './Header';
import WLMovie from '../MoviesComponents/WLMovie';
import api from '../API/moviesAPI';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchedMovies } from '../Redux/MoviesSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/movies");
        dispatch(fetchedMovies(response.data))
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchMovies()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Search />
          <MovieSlide />
          <div id='singl'></div>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />}  />
            <Route path='/watch-list' element={<WLMovie />}  />
            <Route path="/searched-movies" element={<Searched />}  />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
