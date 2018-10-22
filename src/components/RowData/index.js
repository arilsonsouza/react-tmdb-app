import React from 'react'
import './row_data.css'

const RowData = props => {
    return (
        <div className='row'>
            <div className='col'>
                <span className='movie-detail-meta-data-title'>{ props.firstTitle }</span>
                <span className='movie-detail-meta-data color-style'>{ props.firstValue }</span>
            </div>
            <div className='col'>
                <span className='movie-detail-meta-data-title'>{ props.secondTitle }</span>
                <span className='movie-detail-meta-data color-style'>{ props.secondValue }</span>
            </div>
        </div>
    )
}

export default RowData