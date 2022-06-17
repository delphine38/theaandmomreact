import React from "react";

//images
import ImageHeader from '../images/imageHeader.jpg';


//components

const Header = () =>{
    return(
        <div>
            <section className="header">
                <article>
                    <img src={ImageHeader} alt="image du header" width="90px" className="imageHeader" />
                </article>
            
                <article className="h2Header">
                    <h3 className="h2TheaandMom">Théa and Mom's Créations</h3>
                    <h3 className="h2Bijoux">Des Bijoux - La Nature - En Famille</h3>
                </article>
                <article className="butonContact">
                    <button type="button" class="btn">Contact</button>
                </article> 
            </section>

            
           

        </div>
    )
}
export default Header;