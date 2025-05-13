import React from 'react'
import foto from '../assets/tula.jpg'
import './Card.css'

function Card(){
    return(
        <div className='card'>
            <img src={foto} className='foto'/>
            <h2 className='title'>Tulla Luana</h2>
            <hr className='linha'></hr>
            <p className='text'>Eu sou Esquizofrenica mas eu sou inteligente</p>
        </div>
    );
}

export default Card;