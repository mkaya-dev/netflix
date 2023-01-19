import React from "react";
import "../component/All.css"
import { Link } from "react-router-dom";
import EnglishFlag from "./amerika.png"
import TurkishFlag from "./türkiye.png"

const FilmDetail = ({ detail }) => {

    const Film_img = `https://image.tmdb.org/t/p/w500/`

    if (detail === null)
        return (
            <div>
                <p>
                    loading...
                </p>
            </div>
        )

    return (
        <div>
            <div className="sol">
                <img src={Film_img + detail.poster_path} width="350" />
            </div>
            <div className="sag">
                <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <h6 className="card-text">{detail.overview}</h6><br />
                </div>
                <span className="icon tr tooltip-w">
                    {
                        detail.original_language === "en" &&(
                            <img src={EnglishFlag} width="30px" />
                        )
                    }

                    {
                        detail.original_language === "tr" && (
                            <img src={TurkishFlag} width="30px" />
                        )
                    }

                </span>
                <span className="icon-hd tooltip-w " title="HD Kalite">HD</span>
                <table class="table text-light " style={{ width: 1155 }}>

                    <tbody>
                        <tr>
                            <td>Popülerlik</td>
                            <td><button class="btn1 btn">{detail.popularity}</button><br /><br /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Oy ortalaması</td>
                            <td><button className="btn1 btn ">{detail.vote_average}</button><br /><br /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Oy sayısı</td>
                            <td><button className="btn1 btn">{detail.vote_count}</button><br /><br /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <Link to="/"><button className="button">Geri</button></Link>


            </div>


        </div>
    )
}

export default FilmDetail;