import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Movie from './Movie'
import './Movies.css';
import ReactPaginate from 'react-paginate';
import { Link as LinkForScroll } from 'react-scroll'


function WLMovie() {
    const { watchList } = useContext(GlobalContext)
    const [pageNumber, setPageNumber] = useState(0);

    const moviesPerPage = 12;
    const pagesVisited = pageNumber * moviesPerPage;
    const pageCount = Math.ceil(watchList.length / moviesPerPage)

    const displayMovies = watchList.slice(pagesVisited, pagesVisited + moviesPerPage);


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


    return (<div className='MoviesBackground' id='movies'>
        <div className='Movies' >
            {displayedMovieItems}
        </div>
        {watchList.length > moviesPerPage && <div className='Pagination' >
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
        </div>}
    </div>
    )
}

export default WLMovie