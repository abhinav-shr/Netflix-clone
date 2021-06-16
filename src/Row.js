import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import Movie from './Movie'
import './Row.css'

function Row(props) {

    const [row, setRow] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchData);
            setRow(request.data.results)
        }
        fetchData();

        return requests
    }, [props.fetchData])

    console.log(row)

    return (
        <div>
        <h2 className='row_title'>{props.row_title}</h2>
        <div className="movie_row" >
            
            {row.map((item) => 
                <Movie key = {item.id} image = {`https://image.tmdb.org/t/p/original${item?.poster_path}`} title = {item?.title || item?.name || item?.original_name}/>
            
                
            )}
            
        </div>
        </div>
    )
}

export default Row
