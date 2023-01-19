import React from "react";
import { Link } from "react-router-dom";

const Header = ({populerClick,TrendClick,serchbarClick,movieName,setMovieName}) => {

    const populerTing = () =>{
        populerClick()
    }

    const trendTing = () =>{
        TrendClick()
    }

    const serchbarTing = () =>{
        serchbarClick()
    }

    return (
        <div>
            <ul class="nav nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active text-danger" aria-current="page" href="/">AnaSayfa</a>
                </li>
                <li class="nav-item">
                    <a onClick={() => populerTing()} class="nav-link text-light" href="#">Popüler</a>
                </li>
                <li class="nav-item">
                    <a onClick={() => trendTing()} class="nav-link text-light" href="#">Trendler</a>
                </li>
                <div className="serch-main">
                    <input type="search" placeholder="Ara" value={movieName} onChange={(e) => setMovieName(e.target.value)} className="tbox-search" />
                    <a className="btn-search">
                        <i onClick={() => serchbarTing()} className="fa fa-search text-light"></i>
                    </a>
                </div>
                <p className="btn btn-outline-dark">
                    <Link to="/Profil"><i class="text-danger fa-solid fa-right-from-bracket"></i></Link>
                </p>
                <button className="btn2 btn-success">HOŞGELDİNİZ</button>
            </ul>

        </div>
    )
}

export default Header;