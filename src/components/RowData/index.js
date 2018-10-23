import React from 'react'
import './row_data.css'

const RowData = ({firstTitle, firstValue, secondTitle, secondValue}) => {
    return (
        <div className='row'>
            <div className='col'>
                <span className='movie-detail-meta-data-title'>{ firstTitle }</span>
                <span className='movie-detail-meta-data color-style'>{ firstValue }</span>
            </div>
            <div className='col'>
                <span className='movie-detail-meta-data-title'>{ secondTitle }</span>
                <span className='movie-detail-meta-data color-style'>{ secondValue }</span>
            </div>
        </div>
    )
}

export default RowData