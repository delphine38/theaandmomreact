import React from 'react';

import ImageFleurMainThea from '../images/fleurmainthea.jpg';

const Apropos = ()=>{
  return (
    <div className='apropos'>
        
            <article className='fleurMainTheaApropos'>
                <img src={ImageFleurMainThea} alt="fleur main thea" />
            </article>
            <section className='texteApropos'>
                <h1>Ce qui se cache derrière Théa and Mom's Créations</h1>
                <p>Bonjour à tous ! Thea 6 ans et sa maman Michèle LANDAIS 36 ans se sont lancées dans la création de bijoux mais aussi d'objets en Résine avec des fleurs séchées ramassées en Isère, dans l'Ain et dans le Rhône.</p>
                <p>Une histoire incroyable est arrivée en mai 2022 quand toutes les deux ont voulu se lancer un mini projet de fête des mères avec ses camarades de classes : ce petit projet s'est transformé en grand projet au point de devoir ouvrir une boutique pour répondre aux demandes de nos clients et clientes.</p>
                <p>Théa gagne dans sa tirelire 3% quand elle a séchées des fleurs avec sa maman, 5% quand elle a fait la mise en place des fleurs dans les bijoux/objets, et 2% pour tous les autres objets qui seront vendu sur la boutique car avant tout : <br />C'est un DUO mère fille 🙂</p>
            </section>
    </div>
  )
};


export default Apropos;
