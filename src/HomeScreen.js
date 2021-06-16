import React from 'react';
import './HomeScreen.css';
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'

import requests from './requests'


function HomeScreen() {
    return (
        <div className='homescreen'>
            <Nav />

            <Banner />

            {/* rows */}

            <Row row_title = {"Trending"} fetchData = {requests.fetchTrending}/>
            <Row row_title = {"Netflix Originals"} fetchData = {requests.fetchNetflixOriginals}/>
            <Row row_title = {"Top Rated"} fetchData = {requests.fetchTopRated}/>
            <Row row_title = {"Romance"} fetchData = {requests.fetchRomanceMovies}/>
            <Row row_title = {"Comedy"} fetchData = {requests.fetchComedyMovies}/>
            <Row row_title = {"Action"} fetchData = {requests.fetchActionMovies}/>
            <Row row_title = {"Horror"} fetchData = {requests.fetchHorrorMovies}/>
            <Row row_title = {"Documentaries"} fetchData = {requests.fetchDocumentaries}/>
            

            

            
            
        </div>
    )
}

export default HomeScreen
