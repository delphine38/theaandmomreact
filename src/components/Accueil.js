import React from "react";

//images
import FleurAccueil from '../images/fleuraccueil.jpg';


const Accueil = () =>{
    return(
        <div>
            <div className="row">
                <div className="col-6">
                    <h1 className="h1accueil">Théa and Mom's <br />
                        Créations </h1>
                        <p className="pAmourArtAccueil">De l'Amour, de l'Art et des Paillettes !</p>
                        <section className="texteAccueil">
                        <p>Bienvenue sur le site de notre Boutique en ligne.</p>
                        <p>Vous y trouverez des bijoux en Résine et Fleurs Naturelles à des prix abordables. Consultez notre catalogue et profitez de votre shopping avec "Théa and Mom's Créations".</p>
                        <p>Théa a 6 ans et moi 36 ans (sa maman , Michèle LANDAIS) réalisons de nombreux bijoux et objets du quotidien avec des fleurs locales que nous séchons ensemble (fleurs d’Isère, Ain, Rhône). Certains Objets sont composés par Théa et d'autre par mes soins, ce sera signalé soit en description soit en #HASHTAG Made by THEA si c'est THEA, ou Made By Mom si c'est moi :-)</p>
                        <p>Bien entendu ma petite Théa va recevoir dans sa tirelire quelques euros sur les ventes où elle a participé au séchage des fleurs, quand elle compose elle même les bijoux/objets en vente ), également quand elle n’a pas participé à mes propres créations car c’est avant tout <br /> un DUO Mère Fille.(2%)
</p>
<p>Je vous conseille d'aller voir notre page <a href={"https://www.facebook.com/mickaela.land"} target="_blank" className="aFacebookTexteAccueil">Facebook</a> où vous pourrez suivre nos aventures. Contactez-nous pour toutes questions 🙂 <a href={"https://www.facebook.com/mickaela.land"} target="_blank" className="aFacebookTexteAccueil">https://www.facebook.com/TheaAndMom</a> 
</p>

</section>

                </div>
                <div className="col-6">
                    <img src={FleurAccueil} alt="fleur accueil" width="100%" />

                </div>
            </div>
        </div>
    )
}
export default Accueil;