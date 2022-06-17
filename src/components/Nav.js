import React from "react";

import { useNavigate } from "react-router-dom";

//images
import ImageFacebook from '../images/facebook.png';
import ImagePanier from '../images/panier.jpg';

const Nav = () =>{
    const navigate = useNavigate();

    const navigateAccueil=()=>{
        navigate("/accueil");
    }
    const navigateBoutique=()=>{
        navigate("/boutique");
    }
    return(
        <div>
            <section className="ensemblenav">
                <article>
                    <ul class="nav">
                        <li class="nav-item">
                            <a onClick={navigateAccueil}  class="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={navigateBoutique}  class="nav-link" href="#">Boutique</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">A propos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    
                    
                    </ul>
                </article>

                <article>
                    <a href={"https://www.thea.mom.creation@gmail.com"} target="_blank" className="athemomcreation">
                                thea.mom.creation@gmail.com
                    </a>
                    
                    <a href={"https://www.facebook.com/mickaela.land"} target="_blank">
                        <img src={ImageFacebook} alt="facebook" width="20px" className="facebook" />
                    </a>
                    <img src={ImagePanier} alt="panier" width="35px" className="panier" />
                </article>
            </section>
            

            
        </div>
    )
}

export default Nav;