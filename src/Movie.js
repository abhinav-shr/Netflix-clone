import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
        <div className='movie_box'>
            <img className='thumbnail' src={props.image} alt="Lucifer"/>
            {/* <h4 className='title'>{props.title}</h4> */}
        </div>
    )
}

export default Movie
