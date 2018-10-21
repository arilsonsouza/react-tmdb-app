import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as movieActions from '../../actions/Movies'
import * as queryActions from '../../actions/Query'

import './pagination.css'

class Pagination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: [],
        }
    }

    setPages = (props) => {
        const pages = this.generatePagesArray(props.currentPage, props.collectionLength,
                        props.rowsPerPage, props.paginationRange)
        this.setState({
            pages
        })
    }

    componentDidMount() {
        this.setPages(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.setPages(nextProps)
    }

    generatePagesArray = (currentPage, collectionLength, rowsPerPage, paginationRange) => {
        var pages = [];
        var totalPages = Math.ceil(collectionLength / rowsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var position;

        if (currentPage <= halfWay) {
            position = 'start';
        } else if (totalPages - halfWay < currentPage) {
            position = 'end';
        } else {
            position = 'middle';
        }

        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pages.push('...');
            } else {
                pages.push(pageNumber);
            }
            i++;
        }
        return pages;
    }

    calculatePageNumber = (i, currentPage, paginationRange, totalPages) => {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        } else if (i === 1) {
            return i;
        } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            } else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            } else {
                return i;
            }
        } else {
            return i;
        }
    }

    loadMore = (page) => {
        if(this.props.query){
            this.props.searchMovies('search', this.props.query, page)
        }else{
            this.props.fetchMovies(this.props.category, page)
        }
    }

    renderPaginationItem(page, index) {
        return page === '...' ? 
            <li className='pagination-item-disabled' key={ index }> {page} </li> :
                page !== this.props.currentPage ? 
                    <li className={'pagination-item'} key={index} onClick={() => this.loadMore(page)}> {page} </li> :
                    <li className={'pagination-item current-page-item'} key={index}> {page} </li>
    }
    render() {
        return (
            <div>
                <ul className='pagination'>
                    <li className={ this.props.currentPage !== 1  ? 'pagination-item' : 'pagination-item-disabled'}
                       onClick={ () =>  this.props.currentPage !== 1 ? this.loadMore(this.props.currentPage - 1) : null }>
                        <i className="fas fa-angle-left"></i>
                    </li>
                    
                    {this.state.pages.map((page, index) =>
                        this.renderPaginationItem(page, index)
                    )}
                    <li className={ this.props.currentPage !== this.state.pages[this.state.pages.length - 1] ? 'pagination-item' : 'pagination-item-disabled'}
                        onClick={ () =>  this.props.currentPage !== this.state.pages[this.state.pages.length - 1] ? this.loadMore(this.props.currentPage + 1) : null  }>
                        <i className="fas fa-angle-right"></i>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    query: state.query
})

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({},queryActions, movieActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)