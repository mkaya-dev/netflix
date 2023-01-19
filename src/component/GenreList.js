import React, { useEffect, useState } from "react";

const GenreList = ({ onClick }) => {

    const GenreClick = (id) => {
        onClick(id)
    }

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const apiurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=dcbcfe9ab6d2818e853036429ecb24e7`;
        fetch(apiurl)
            .then(genre => genre.json())
            .then(genre => {
                setGenres(genre.genres)
            })
    }, []);
    return (
        <div className="col-1">
            <div className="btn-group-vertical">
                {
                    genres.map(gen =>
                        <div key={gen.id}>
                            <button onClick={() => GenreClick(gen.id)} className="btn1 btn-dark">{gen.name}</button>
                        </div>
                    )           
                }
            </div>
        </div>
    )
}

export default GenreList;