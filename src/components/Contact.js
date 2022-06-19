import React from 'react';

//images
import ImageMom from "../images/mom.jpg";
import ImageFacebook from "../images/facebook.png";

const Contact = ()=>{
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='nousContacter col-6'>
                <h3 className='h3Contact'>Nous contacter</h3>
                <a href='thea.mom.creation@gmail.com' className='aContact'>thea.mom.creation@gmail.com</a>
            </div>
            <div className='col-6'>
                <img src={ImageMom} alt="mama de thea" />
            </div>
        </div>



        <section className='formulaire'>
            <h2 className='h2Formulaire'>Théa and Mom's Créations</h2>
            <p>Formulaire d'abonnement</p>

            <div className="contact">
                <form name="contact" 
                        method="post" 
                        className='contact_form' 
                        data-netlify="true" 
                        onSubmit="submit">

                        <input type="hidden" name="form-name" value="contact" />
                        <label>Adresse Mail *</label>
                        <input type="email" name="email" placeholder='Votre email *'/>
                    
                        <button type="submit" className='btnContact'>Envoyer</button>
                    
                </form>

                <p className='pMerciEnvoi'>Merci pour votre envoi !</p>
                <a href='thea.mom.creation@gmail.com' className='aFormulaire'>thea.mom.creation@gmail.com</a>

                <article>
                    <a href={"https://www.facebook.com/mickaela.land"} target="_blank">
                        <img src={ImageFacebook} alt="facebook" width="20px" className="facebook" />
                    </a>
                </article>
            </div>
        </section>
    </div>
</div>
  )
}

export default Contact;
