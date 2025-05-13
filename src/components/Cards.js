import React from 'react'
import foto from '../assets/igona.jpg'
import './Card.css'

function Card(){
    return(
        <div className='card'>
            <img src={foto} className='foto'/>
            <h2 className='title'>Igona</h2>
            <hr className='linha'></hr>
            <p className='text'>Partiu Aglomerar?</p>
        </div>
    );
}

export default Card;