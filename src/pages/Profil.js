import React from "react";
import { Link } from "react-router-dom";
import user from "./Profilimages/profil1.jpg"
import user1 from "./Profilimages/profil2.jpg"
import user2 from "./Profilimages/avatar1.png"
import user3 from "./Profilimages/avatar1.jpg"
import "../component/All.css"



const Profil = () =>{
    return(
        <div className="row">
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="row justify-content-center">Kim izliyor ?</h1>
                    <div className="row justify-content-center">
                    <li className="Profil col-3">
                        <Link to="/"><img className="border1" src={user} width="200px" /><br/></Link>
                        <span>Mustafa</span>
                    </li>
                    <li className="Profil col-3">
                        <Link to="/"><img className="border1" src={user1} width="200px" /><br/></Link>
                        <span>Muharem</span>
                    </li>
                    <li className="Profil col-3">
                        <Link to="/"><img className="border1" src={user2} width="200px" /><br/></Link>
                        <span>Tahçit</span>
                    </li>
                    <li className="Profil col-3">
                        <Link to="/"><img className="border1" src={user3} width="200px" /><br/></Link>
                        <span>Simge</span>
                    </li>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Profil;