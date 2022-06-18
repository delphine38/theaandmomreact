import React from 'react';

//images
import ImageMom from "../images/mom.jpg";

const Contact = ()=>{
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h3>Nous contacter</h3>
                <a href='thea.mom.creation@gmail.com'>thea.mom.creation@gmail.com</a>
            </div>
            <div className='col-6'>
                <img src={ImageMom} alt="mama de thea" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
