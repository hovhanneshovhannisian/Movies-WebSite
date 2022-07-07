import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from '../src/MoviesComponents/Movies';
import Search from '../src/SearchComponents/Search';
import MovieSlide from './MoviesComponents/MovieSlide';
import Footer from './Footer';
import MovieDetailsPage from './MoviesComponents/MovieDetailsPage';
import Logo from './Logo';

function App() {
  return (
    <Router>
      <div className="App">
        <a href='/'><Logo /></a>
        <Search />
        <MovieSlide />
        <div  id='singl'></div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
