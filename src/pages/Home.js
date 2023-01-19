import React, { useEffect, useState } from "react";
import "../component/All.css"
import FilmList from "../component/FilmList";
import GenreList from "../component/GenreList";
import Navbar from "../component/Navbar";
const Home = () => {

    const [filmler, setFilmler] = useState([]);
    const [movieName, setMovieName] =useState([]);
 
    useEffect(() => {
        const apiUrl =`https://api.themoviedb.org/3/movie/popular?api_key=dcbcfe9ab6d2818e853036429ecb24e7`;
        fetch(apiUrl)
            .then(results => results.json())
            .then(results => {
                setFilmler(results.results)
            })
    },[]);

    const GetMoviesFromGenre = (id) => {
        const apiUrl =`https://api.themoviedb.org/3/discover/movie?api_key=dcbcfe9ab6d2818e853036429ecb24e7&with_genres=${id}`;
        fetch(apiUrl)
            .then(results => results.json())
            .then(results => {
                setFilmler(results.results)
            })
    }

    const PopulerClick = () =>{
        const apiurl=`https://api.themoviedb.org/3/movie/popular?api_key=dcbcfe9ab6d2818e853036429ecb24e7`
        fetch(apiurl)
        .then(populer=>populer.json())
        .then(populer=>{
            setFilmler(populer.results)
        })
    }

    const Trendler = () =>{
        const apiurl=`https://api.themoviedb.org/3/trending/all/day?api_key=dcbcfe9ab6d2818e853036429ecb24e7`
        fetch(apiurl)
        .then(Trend=>Trend.json())
        .then(Trend=>{
            setFilmler(Trend.results)
        })
    }

    const Serchbar = () =>{
        const apiurl=`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=dcbcfe9ab6d2818e853036429ecb24e7`
        fetch(apiurl)
        .then(serch=>serch.json())
        .then(serch=>{
            setFilmler(serch.results)
        })
    }
 
    return (
        <div>
            <Navbar populerClick={PopulerClick} TrendClick={Trendler} serchbarClick={Serchbar} movieName={movieName} 
            setMovieName={setMovieName} />
            <div className="row">
                <GenreList onClick={GetMoviesFromGenre} />
                <FilmList filmler={filmler} />
            </div>

        </div>
    )
}
export default Home;