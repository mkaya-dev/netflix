import React from "react";
import { Link } from "react-router-dom";
import "./All.css"

const FilmList =({filmler}) =>{

    const Film_img = `https://image.tmdb.org/t/p/w500/`
    
    return(
        <div className="col-11 row row-cols-1 row-cols-md-6 g-1">
            {
                filmler.map(film =>
                    <div key={film.id}>
                        <Link to={`Detail/${film.id}`}><img className="cerceve" src={Film_img + film.poster_path} width="200px" /></Link>
                    </div>
                    )
            }
        </div>
    )
}

export default FilmList;