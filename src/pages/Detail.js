import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmDetail from "../component/FilmDetail";
import Header from "../component/Header";
const Detail = () => {

    let { id } = useParams();

    const [filmDetail, setFilmDetail] = useState(null);

    useEffect(() => {
        const apiurl = (`https://api.themoviedb.org/3/movie/${id}?api_key=dcbcfe9ab6d2818e853036429ecb24e7`)
        fetch(apiurl)
            .then(detail => detail.json())
            .then(detail => {
                setFilmDetail(detail)
            });
    }, [id]);
    return (
        <div>
            <Header />
            <FilmDetail detail={filmDetail} />

        </div>
    )
}

export default Detail;