import './Movies.css';
import Movie from './Movie';
import movies from '../data/data'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link as LinkForScroll } from 'react-scroll'
import { useSelector } from 'react-redux'
import { selectWatchList } from '../Redux/WatchListSlice'


function Movies() {
    
    const watchList = useSelector(selectWatchList)

    let sortedMovies = []
    if (watchList.length > 0) {
        movies.forEach((movie, index) => {
            for (let i = 0; i < watchList.length; i++) {
                if (watchList[i].id === movie.id) {
                    movies[index] = watchList[i]
                }
            }
        })
        sortedMovies = movies.sort((objA, objB) => Number(objB.release) - Number(objA.release));
    } else {
        sortedMovies = movies.sort((objA, objB) => Number(objB.release) - Number(objA.release));
    }

    const [pageNumber, setPageNumber] = useState(0);

    const moviesPerPage = 12;
    const pagesVisited = pageNumber * moviesPerPage;
    const pageCount = Math.ceil(sortedMovies.length / moviesPerPage)

    const displayMovies = sortedMovies.slice(pagesVisited, pagesVisited + moviesPerPage);


    const displayedMovieItems = displayMovies.map((movie) => {
        return (
            <div key={movie.id} >
                <Movie {...movie} />
            </div>
        )
    })

    function pageChange({ selected }) {
        setPageNumber(selected)
    }

    return (
        <div className='MoviesBackground' id='movies'>
            <div className='Movies' >
                {displayedMovieItems}
            </div>
            <div className='Pagination' >
                <LinkForScroll to='movies' smooth={true} duration={200}>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={pageChange}
                        containerClassName={"paginationBtns"}
                        previousLinkClassName={"prevBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"disabledPage"}
                        activeClassName={"activePage"}
                    />
                </LinkForScroll>
            </div>
        </div>
    )
}

export default Movies