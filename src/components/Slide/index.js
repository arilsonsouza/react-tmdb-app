import React, { Component } from 'react'

import './slide.css'
import Card from '../Card'

class Slide extends Component {
    constructor(props) {
        super(props)

        this.state = {
            property: this.props.properties[0],
            currentIndex: 0
        }
    }

    componentDidMount() {
        // console.log(this.state.property)
    }

    nextProperty = () => {
        const newIndex = this.state.currentIndex + 1
        this.setState({
            property: this.props.properties[newIndex],
            currentIndex: newIndex
        })
    }

    prevProperty = () => {
        const newIndex = this.state.currentIndex - 1

        this.setState({
            property: this.props.properties[newIndex],
            currentIndex: newIndex
        })
    }

    render() {
        const { currentIndex } = this.state
        const { properties, title } = this.props
        const propertiesLength = properties.length

        return (
            <div>
               {this.state.property && <div className='cards-slider-container'>
                    <div className='slider-actions'>
                        <button onClick={() => this.prevProperty()}
                            disabled={currentIndex === 0}
                            className='slider-actions-btn'>
                            <i className="fas fa-angle-left"></i>
                        </button>
                        <span className='slider-title'> { title }</span>
                        <button onClick={() => this.nextProperty()}
                            disabled={currentIndex === propertiesLength - 1}
                            className='slider-actions-btn'>
                            <i className="fas fa-angle-right"></i>
                        </button>
                    </div>
                    <div className='cards-slider'>
                        <div className='cards-slider-wrapper' style={{
                            'transform': `translateX(-${currentIndex * (100 / propertiesLength)}%)`
                        }}>
                            {
                                properties.map(property => <Card key={ property.credit_id ? property.credit_id : property.cast_id } property={property}
                                    active={ ( ((property.credit_id && this.state.property.credit_id) && 
                                               ( property.credit_id === this.state.property.credit_id)) && 
                                               (property.id === this.state.property.id) ) ? true : false} />)
                            }
                        </div>
                    </div>
                </div> }

            </div>
        )
    }
}


export default Slide