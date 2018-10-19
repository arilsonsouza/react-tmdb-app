import React,{ Component } from 'react'

class Search extends Component{

    constructor(props){
        super(props)

        this.state = {
            query: null
        }
    }

    setQuery = (searchTerm) => {
        this.setState({
            query: searchTerm
        })
    }

    componentDidMount(){
        const { query }= this.props.match.params
        this.setQuery(query);
    }
    
    componentWillReceiveProps(nextProps){
        const { query } = nextProps.match.params
        this.setQuery(query);
    }

    render(){
        return(
            <div>
                <h1>Pesquisar: { this.state.query }</h1>
            </div>
        )
    }
}

export default Search