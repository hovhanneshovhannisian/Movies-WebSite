import './Movies.css';
import Movie from './Movie';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { Link as LinkForScroll } from 'react-scroll'
import { useSelector } from 'react-redux'
import { selectWatchList } from '../Redux/WatchListSlice'
import { selectMovies } from '../Redux/MoviesSlice';


function Movies() {
    const movies = useSelector(selectMovies)
    const watchList = useSelector(selectWatchList)
    document.title = "Movie App"
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

    useEffect(() => {
      sessionStorage.setItem("watchList", JSON.stringify(watchList))
    }, [watchList])

    const [pageNumber, setPageNumber] = useState(0);

    const moviesPerPage = 12;
    const pagesVisited = pageNumber * moviesPerPage;
    const pageCount = Math.ceil(sortedMovies.length / moviesPerPage)

    const displayMovies = sortedMovies.slice(pagesVisited, pagesVisited + moviesPerPage);

    function pageChange({ selected }) {
        setPageNumber(selected)
    }
    
    const displayedMovieItems = displayMovies.map((movie) => {
        return <Movie key={movie.id} {...movie} />
    })


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

export default Movies;