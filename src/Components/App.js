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

function App() {

  return (
      <Router>
        <div className="App">
          <Header />
          <Search />
          <MovieSlide />
          <div id='singl'></div>
          <Routes>
            <Route path="/" element={<Movies />} key='1' />
            <Route path="/movies/:id" element={<MovieDetailsPage key='2'/>}  />
            <Route path='/watch-list' element={<WLMovie key='3'/>}  />
            <Route path="/searched-movies" element={<Searched key='4'/>}  />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
