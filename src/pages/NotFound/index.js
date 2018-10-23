import React from 'react'
import './notfound.css'
import notFound from './notfound.jpg'

const NotFound = props => {
    return(
        <div className='not-found-page'>
                <img alt='Página não encontrada' src={ notFound }/>
        </div>
    )
}

export default NotFound