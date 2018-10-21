import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './home.css'
import bg from './bg.jpg'
import * as movieActions from '../../actions/Movies'
import Movies from '../../components/Movies'

const categories = [
    { name: 'popular', title: 'Filmes Polulares', url: '/filmes/populares' },
    { name: 'top_rated', title: 'Filmes mais votados',  url: '/filmes/mais-votados' },
    { name: 'upcoming', title: 'Próximos Lançamentos', url: '/filmes/lancamentos' },
    { name: 'now_playing', title: 'Em cartaz', url: '/filmes/em-cartaz' },
]

class Home extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        categories.forEach(category => this.props.fetchMovies(category.name))
    }
    render(){
        return(
           <section className='home'>
                <header className='home-header' style={{ backgroundImage: `url(${bg})` }}>
                    <div className='home-header-wrap-bg'>
                        <div className='home-header-wrap'>
                            <h1 className='home-header-title'>Reac TMDB App</h1>
                            <strong className='home-header-subtitle'>Feito com React</strong>
                            <a className='home-header-link' href='https://github.com/arilsonsouza/react-tmdb-app'>
                                <svg id="iconGithub" className='home-header-link-icon' viewBox="0 0 15 15" width="100%" height="100%">
                                <title>Github</title>
                                    <path d="M13.9939254,4.10034361 C13.3232546,2.95122813 12.4135324,2.0414718 11.2645196,1.3708694 C10.1153357,0.700232792 8.86076945,0.365 7.49993159,0.365 C6.13926475,0.365 4.88428808,0.700335404 3.73534361,1.3708694 C2.58622813,2.04143759 1.6765402,2.95122813 1.0058694,4.10034361 C0.3353012,5.24942489 0,6.50423055 0,7.86472637 C0,9.4989905 0.47680289,10.9685627 1.4306481,12.2738191 C2.38439069,13.5791782 3.61648493,14.4824358 5.1268282,14.9836945 C5.30263644,15.0163251 5.43278242,14.9933742 5.51740296,14.9154234 C5.60205771,14.8373701 5.64433378,14.7396152 5.64433378,14.6225693 C5.64433378,14.6030389 5.64265778,14.4273333 5.63940841,14.0952472 C5.63605642,13.7631612 5.63448304,13.4734538 5.63448304,13.226262 L5.40986578,13.2651177 C5.2666539,13.2913521 5.0859887,13.3024684 4.86787019,13.2993216 C4.64985429,13.2962774 4.42352684,13.2734292 4.18919566,13.2309479 C3.95476187,13.1888429 3.73671177,13.0911906 3.53487433,12.9381964 C3.33313951,12.7852022 3.18992762,12.5849382 3.10527288,12.3377121 L3.00762064,12.1129922 C2.94253054,11.9633842 2.84005555,11.7971873 2.70005883,11.6150171 C2.56006211,11.4326759 2.41849202,11.3090629 2.27528013,11.2439728 L2.20690646,11.195027 C2.16134681,11.162499 2.11907075,11.1232671 2.07997565,11.0777417 C2.04091475,11.0322162 2.01167038,10.9866566 1.99213994,10.9410285 C1.97257528,10.8953663 1.98878795,10.8579129 2.04094895,10.8285318 C2.09310996,10.7991506 2.18737601,10.7848875 2.32415756,10.7848875 L2.51939363,10.8140635 C2.64960802,10.8401611 2.81067436,10.9181119 3.00279788,11.0483947 C3.19481879,11.1785749 3.35266996,11.3478159 3.4763856,11.5560495 C3.62619885,11.8230455 3.80669303,12.0264905 4.0183812,12.1664872 C4.22989835,12.3064839 4.4431599,12.3763625 4.65796062,12.3763625 C4.87276135,12.3763625 5.05828351,12.3600815 5.2145955,12.3276903 C5.37073648,12.2951282 5.51723194,12.2461824 5.65401349,12.1811265 C5.71260484,11.7447526 5.872132,11.4095198 6.13245817,11.1751887 C5.76141385,11.1361962 5.42782285,11.077468 5.13151414,10.9993804 C4.83537645,10.9211902 4.52935382,10.7942936 4.21365148,10.6183486 C3.89777811,10.4426429 3.63574175,10.224456 3.42747397,9.96416406 C3.21917199,9.70373528 3.04822071,9.36183272 2.91485956,8.93876421 C2.78143,8.51552469 2.71469812,8.02729768 2.71469812,7.47394638 C2.71469812,6.68605868 2.97191173,6.0155931 3.48623634,5.46217339 C3.2453038,4.8698296 3.26804942,4.20579435 3.5545416,3.47013606 C3.74334733,3.41147631 4.02334077,3.45549678 4.39438508,3.60192383 C4.7654978,3.7484193 5.03721388,3.87391355 5.20980695,3.97796192 C5.38240002,4.0819761 5.52068654,4.17011965 5.62487174,4.24160587 C6.23045245,4.072399 6.85539259,3.98777845 7.49986318,3.98777845 C8.14433378,3.98777845 8.76941073,4.072399 9.37502565,4.24160587 L9.74610417,4.00734311 C9.99986318,3.85103111 10.2995239,3.70778502 10.644368,3.57757063 C10.9894173,3.44742465 11.2532665,3.41157892 11.4356419,3.47023868 C11.728496,4.20593117 11.7545936,4.86993221 11.5135926,5.462276 C12.027883,6.01569571 12.2851993,6.68633231 12.2851993,7.47404899 C12.2851993,8.0274003 12.218228,8.51716648 12.0850036,8.94365537 C11.9516083,9.37021268 11.7791862,9.7117732 11.5676691,9.96905522 C11.3559125,10.226303 11.0922001,10.4427798 10.7764978,10.6184512 C10.460727,10.7942594 10.1546018,10.921156 9.85846411,10.9993462 C9.5621896,11.0775364 9.2285986,11.1362988 8.85755428,11.1753597 C9.19596804,11.4682138 9.36520912,11.93048 9.36520912,12.5619531 L9.36520912,14.6222957 C9.36520912,14.7393416 9.40591181,14.8370622 9.48738559,14.9151498 C9.56875676,14.9931006 9.69726095,15.0160514 9.87306919,14.9833867 C11.3836177,14.4821964 12.6157119,13.5789046 13.5694203,12.2735455 C14.5230261,10.9682891 15,9.49871687 15,7.86445274 C14.999658,6.50412794 14.6641857,5.24942489 13.9939254,4.10034361 Z" stroke="none" fillRule="nonzero"></path>
                                </svg>
                                <span>Ver código</span>
                            </a>
                        </div>
                    </div>
                </header>
                { categories.map(category => 
                    <div className='wrapper' key={ category.name }>
                            <Movies title={ category.title } category={ category.name } url={ category.url } showAll={ false } />
                    </div>
                ) }

           </section>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)