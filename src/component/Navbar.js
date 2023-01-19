import React from "react";
import { Link } from "react-router-dom";
import resim1 from "./slaytimages/resim1.jpg"
import resim2 from "./slaytimages/resim2.jpg"
import resim3 from "./slaytimages/resim3.jpg"
import resim4 from "./slaytimages/resim5.jpg"
import resim5 from "./slaytimages/resim6.jpg"
import resim6 from "./slaytimages/resim7.jpg"
import resim7 from "./slaytimages/resim8.jpg"
import resim8 from "./slaytimages/resim4.jpg"
import resim9 from "./slaytimages/thelast.jpg"


import "./All.css"

const Navbar = ({populerClick,TrendClick,serchbarClick,movieName,setMovieName}) => {

    const populerTing = () =>{
        populerClick()
    }

    const trendTing = () =>{
        TrendClick()
    }

    const serchbarTing = () =>{
        serchbarClick()
    }

    const images = [
        {
            img: resim1
        },
        {
            img: resim2
        },
        {
            img: resim3
        },
        {
            img: resim4
        },
        {
            img: resim5
        },
        {
            img: resim6
        },
        {
            img: resim7
        },
        {
            img: resim8
        },
        {
            img:resim9
        }
    ]

    return (
        <div>
            <ul class="nav nav justify-content-center">
                <li class="nav-item">
                    <a class=" nav-link active text-danger" aria-current="page" href="/">AnaSayfa</a>
                </li>
                <li class="nav-item">
                    <a onClick={() => populerTing()} class="nav-link text-light" href="#">Popüler</a>
                </li>
                <li class="nav-item">
                    <a onClick={()=> trendTing()} class="nav-link text-light" href="#">Trendler</a>
                </li>
                <div className="serch-main">
                    <input type="search" placeholder="Ara" value={movieName} onChange={(e)=> setMovieName(e.target.value) } className="tbox-search" />
                    <a className="btn-search">
                        <i onClick={()=>serchbarTing()} className="fa fa-search text-light"></i>
                    </a>
                </div>
                <p className="btn btn-outline-dark">
                    <Link to="/Profil"><i class="text-danger fa-solid fa-right-from-bracket"></i></Link>
                </p>
                <button className="btn2 btn-success">HOŞGELDİNİZ</button>
            </ul>

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                   {
                     images.map((slayt, index)=> (
                        <div className={index===0 ? "carousel-item active" : "carousel-item"}>
                            <img src={slayt.img} class="d-block"   style={{width:1600,height:600}} />
                        </div>
                    ))
                   }
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h1>
            </h1>

        </div>
    )
}
export default Navbar;