import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from '../src/MoviesComponents/Movies';
import Search from '../src/SearchComponents/Search';
import MovieSlide from './MoviesComponents/MovieSlide';
import Footer from './Footer';
import MovieDetailsPage from './MoviesComponents/MovieDetailsPage';
import Logo from './Logo';
import { GlobalProvider } from './context/GlobalState';
import WLMovie from './MoviesComponents/WLMovie';

function App() {

  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Logo />
          <Search />
          <MovieSlide />
          <div id='singl'></div>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path='/watch-list' element={<WLMovie />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
