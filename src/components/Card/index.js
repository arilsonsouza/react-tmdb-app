import React from 'react'

import './card.css'

const Card = ({ property, active }) => {
    const { profile_path, name, character, department } = property

    return (
        <div className={active ? 'card active' : 'card'}>
            <img className='card-img' src={`https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`} 
            alt={name}/>
            <p className='name'>{name}</p>
            <p className='character'>{character ? character : department}</p>
        </div>
    )

}

export default Card