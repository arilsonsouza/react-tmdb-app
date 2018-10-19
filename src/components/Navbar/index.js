import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            query: null
        }
    }

    handleSubmit = (event) => {
        if(event.key === 'Enter'){
            // return <Redirect to={`/pesquisar/${this.state.query.replace(' ', '+')}`}/>
            this.props.history.push(`/pesquisar/${this.state.query.replace(' ', '+')}`)
        }
    }

    onChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div className='navbar-container'>
                <nav className='navbar'>
                    <div className='navbar-side'>
                    <div className='navbar-logo-bg'>
                        <div className='navbar-logo'>
                            <NavLink to='/' className='logo' activeClassName="active-link">
                            <svg id='svgLogo' viewBox='0 0 50 45' width='100%' height='100%'>
                            <title>TMDB Logo</title>
                            <path d='M45.0099206,41.3194444 C47.906746,41.3194444 49.8670635,39.359127 49.8670635,36.4623016 L49.8670635,4.85912698 C49.8670635,1.96230159 47.906746,0.00198412698 45.0099206,0.00198412698 L4.85714286,0.00198412698 C1.96031746,0.00198412698 0,1.96230159 0,4.85912698 L0,44.2103175 L2.49206349,41.3214286 L2.49206349,41.3214286 L2.49206349,4.85912698 C2.49424808,3.55383568 3.55185155,2.49623221 4.85714286,2.49404762 L45.0099206,2.49404762 C46.3152119,2.49623221 47.3728154,3.55383568 47.375,4.85912698 L47.375,36.4623016 C47.3728154,37.7675929 46.3152119,38.8251964 45.0099206,38.827381 L8.55357143,38.827381 L6.06150794,41.3194444 L6.04563492,41.2996032'></path>
                            <polygon points='12.1785714 15.3353175 13.5555556 15.3353175 13.5555556 9.82539683 15.2698413 9.82539683 15.2698413 8.45833333 10.4642857 8.45833333 10.4642857 9.82539683 12.1785714 9.82539683'></polygon>
                            <polygon points='19.7480159 15.3353175 21.125 15.3353175 21.125 8.4484127 19.7480159 8.4484127 19.7480159 11.202381 17.6865079 11.202381 17.6865079 8.4484127 16.3095238 8.4484127 16.3095238 15.3353175 17.6865079 15.3353175 17.6865079 12.5793651 19.7480159 12.5793651'></polygon>
                            <polygon points='26.2400794 13.9563492 23.656746 13.9563492 23.656746 12.5793651 25.8630952 12.5793651 25.8630952 11.202381 23.656746 11.202381 23.656746 9.82539683 26.1230159 9.82539683 26.1230159 8.4484127 22.2777778 8.4484127 22.2777778 15.3353175 26.2400794 15.3353175'></polygon>
                            <polygon points='13.6230159 20.109127 10.906746 17.0853175 10.4642857 17.0853175 10.4642857 24.077381 11.8611111 24.077381 11.8611111 20.234127 13.6230159 22.0833333 15.3849206 20.234127 15.3769841 24.077381 16.7718254 24.077381 16.7718254 17.0853175 16.3392857 17.0853175'></polygon>
                            <path d='M21.4365079,17.077381 C16.6984127,17.077381 16.6984127,24.1746032 21.4365079,24.1746032 C26.1746032,24.1746032 26.1746032,17.077381 21.4365079,17.077381 Z M21.4365079,22.75 C18.6825397,22.75 18.6825397,18.4940476 21.4365079,18.4940476 C24.1904762,18.4940476 24.1904762,22.75 21.4365079,22.75 Z'></path>
                            <rect x='32.8115079' y='17.1924603' width='1.37698413' height='6.88492063'></rect>
                            <polygon points='36.7202381 22.7003968 36.7202381 21.3234127 38.9265873 21.3234127 38.9265873 19.9464286 36.7202381 19.9464286 36.7202381 18.5694444 39.1865079 18.5694444 39.1865079 17.1924603 35.343254 17.1924603 35.343254 24.077381 39.3035714 24.077381 39.3035714 22.7003968'></polygon>
                            <path d='M12.515873,25.9365079 L10.4642857,25.9365079 L10.4642857,32.8214286 L12.515873,32.8214286 C17.0992063,32.8214286 17.0992063,25.9365079 12.515873,25.9365079 Z M12.515873,31.4444444 L11.8412698,31.4444444 L11.8412698,27.3134921 L12.515873,27.3134921 C15.1924603,27.3134921 15.1924603,31.4444444 12.515873,31.4444444 Z'></path>
                            <path d='M21.0892857,29.3730159 C21.5218254,29.0753968 21.7063492,28.5357143 21.7242063,28.015873 C21.7539683,26.8015873 20.9920635,25.9265873 19.7698413,25.9265873 L17.0436508,25.9265873 L17.0436508,32.8214286 L19.7698413,32.8214286 C20.3142974,32.8172449 20.8346683,32.5963907 21.2159271,32.2076855 C21.5971859,31.8189803 21.8079344,31.2944352 21.8015873,30.75 C21.8040455,30.202037 21.5379427,29.687621 21.0892857,29.3730159 Z M18.4305556,27.3015873 L19.6547619,27.3015873 C20.0179732,27.3290631 20.2986579,27.6317827 20.2986579,27.9960317 C20.2986579,28.3602808 20.0179732,28.6630004 19.6547619,28.6904762 L18.4305556,28.6904762 L18.4305556,27.3015873 L18.4305556,27.3015873 Z M19.6547619,31.4424603 L18.4305556,31.4424603 L18.4305556,30.0654762 L19.6547619,30.0654762 C19.8383233,30.0611553 20.0157582,30.1316242 20.1463378,30.2607072 C20.2769174,30.3897902 20.3494269,30.5664009 20.3472222,30.75 C20.3499111,30.9346442 20.2778845,31.1125423 20.1474944,31.243306 C20.0171043,31.3740696 19.839413,31.4466051 19.6547619,31.4444444 L19.6547619,31.4424603 Z'></path>
                            <polygon points='28.5734127 20.9087302 26.7599206 17.1924603 25.1706349 17.1924603 28.4186508 24.2222222 28.7281746 24.2222222 31.9742063 17.1924603 30.3849206 17.1924603'></polygon>
                            </svg>
                            </NavLink>
                        </div>
                    </div>

                    <div className='nav-main-links'>
                        <ul className='nav-links'>
                        <li className='nav-item'>
                            <NavLink to='/populares' className='nav-link' activeClassName="active-link">
                            <div className='nav-link-wrap'>
                                <svg id='icon_popular' className='nav-icon' viewBox='0 0 30 30' width='100%' height='100%'>
                                <title>Populares</title>
                                <path d='M27.6684375,11.6432813 C28.2116602,11.1137695 28.4034375,10.3366406 28.1690625,9.61517578 C27.9346289,8.89371094 27.3226758,8.37779297 26.5719727,8.26875 L20.0077148,7.31490234 C19.8788672,7.29621094 19.7674805,7.21529297 19.7098242,7.09845703 L16.7742187,1.1503125 C16.4385352,0.470039062 15.7587305,0.0474609375 15.0001172,0.0474609375 C14.2415039,0.0474609375 13.5616992,0.470039062 13.2260156,1.1503125 L10.2904102,7.09851563 C10.2326953,7.21529297 10.1213672,7.29621094 9.99246094,7.31496094 L3.42832031,8.26875 C2.67761719,8.37779297 2.06572266,8.89371094 1.83123047,9.61517578 C1.59673828,10.3366406 1.78857422,11.1137695 2.33185547,11.6432813 L7.08175781,16.2733008 C7.17498047,16.3642383 7.21757812,16.4951953 7.19554687,16.6235742 L6.07423828,23.1612305 C5.94603516,23.9089453 6.24755859,24.650332 6.86126953,25.0962305 C7.47498047,25.5422461 8.27349609,25.5998438 8.94486328,25.2469336 L14.8160156,22.1602734 C14.9313281,22.0996289 15.0689648,22.0996289 15.1843359,22.1602734 L21.0555469,25.2469336 C21.3475781,25.4004492 21.6635742,25.4763281 21.9780469,25.4762695 C22.3864453,25.4762695 22.7922656,25.3483008 23.1389648,25.0961719 C23.7526758,24.6502148 24.0542578,23.9087695 23.9259961,23.1611719 L22.8046875,16.6235156 C22.7827148,16.4951367 22.8252539,16.3641797 22.9184766,16.2732422 L27.6684375,11.6432813 Z M21.2448633,16.8911719 L22.3661719,23.4289453 C22.4036719,23.6477344 22.2686133,23.7724805 22.2087891,23.8158984 C22.1489062,23.8592578 21.9884766,23.9493164 21.7920703,23.845957 L15.9208594,20.7592969 C15.6326367,20.607832 15.3164648,20.5320117 15.0002344,20.5320117 C14.6840039,20.5320117 14.3677734,20.607832 14.0796094,20.7592383 L8.20845703,23.8458398 C8.01193359,23.9491406 7.8515625,23.8591992 7.79173828,23.8157813 C7.73191406,23.7723633 7.59679688,23.6476172 7.63435547,23.4288281 L8.75566406,16.8911719 C8.86576172,16.2492773 8.653125,15.594668 8.18666016,15.1400391 L3.43675781,10.5100195 C3.27779297,10.3549805 3.31376953,10.1746875 3.33667969,10.104375 C3.35947266,10.0340039 3.43640625,9.86695313 3.65607422,9.83507813 L10.2201563,8.88123047 C10.8646289,8.78759766 11.4215625,8.38306641 11.7098437,7.79894531 L14.6454492,1.85074219 C14.7437109,1.65169922 14.9262891,1.63019531 15.000293,1.63019531 C15.0741797,1.63019531 15.2567578,1.65164063 15.3550781,1.85074219 L15.3550781,1.85080078 L18.2906836,7.79900391 C18.5789062,8.383125 19.1357813,8.78765625 19.7802539,8.88128906 L26.3444531,9.83513672 C26.5641211,9.86701172 26.6409961,10.0340625 26.6638477,10.1044336 C26.6866992,10.1748047 26.7227344,10.3551563 26.5637109,10.5100781 L21.8138086,15.1400977 C21.3474023,15.594668 21.1347656,16.2492773 21.2448633,16.8911719 Z M24.2450977,1.14990234 C24.5987109,1.40677734 24.6770508,1.90171875 24.4201758,2.25533203 L23.5801172,3.41150391 C23.4253125,3.62455078 23.1840234,3.73769531 22.9392773,3.73769531 C22.7780273,3.73769531 22.6153125,3.68853516 22.4747461,3.58652344 C22.1211328,3.32964844 22.042793,2.83470703 22.299668,2.48115234 L23.1397266,1.32498047 C23.3966016,0.971425781 23.8914258,0.893027344 24.2450977,1.14990234 Z M7.696875,2.47646484 C7.95380859,2.83007812 7.87541016,3.32501953 7.52185547,3.58183594 C7.38146484,3.68390625 7.21869141,3.73306641 7.05738281,3.73306641 C6.81257813,3.73306641 6.57128906,3.61998047 6.41642578,3.40675781 L5.57636719,2.25058594 C5.31949219,1.89703125 5.39789063,1.40208984 5.75144531,1.14521484 C6.10511719,0.888457031 6.6,0.966855469 6.85681641,1.32029297 L7.696875,2.47646484 Z M2.9034375,17.8024805 C3.03849609,18.2182031 2.81103516,18.6646289 2.39537109,18.7996875 L1.03617188,19.2413672 C0.954902344,19.267793 0.872460937,19.2803906 0.791425781,19.2803906 C0.457851563,19.2803906 0.147597656,19.0678125 0.0389648437,18.7333008 C-0.09609375,18.3176953 0.131308594,17.8711523 0.54703125,17.7360938 L1.90623047,17.2944141 C2.32195313,17.1593555 2.76837891,17.386875 2.9034375,17.8024805 Z M15.000293,26.5890234 C15.4374023,26.5890234 15.7916602,26.9432813 15.7916602,27.3803906 L15.7916602,28.8096094 C15.7916602,29.2466602 15.4373437,29.6009766 15.000293,29.6009766 C14.5632422,29.6009766 14.2089258,29.2466602 14.2089258,28.8096094 L14.2089258,27.3803906 C14.2089258,26.9433398 14.5632422,26.5890234 15.000293,26.5890234 Z M29.4529688,17.737207 C29.8686328,17.8722656 30.0960938,18.3186914 29.9610352,18.7343555 C29.8524023,19.0688086 29.5421484,19.2814453 29.2085156,19.2814453 C29.1274805,19.2814453 29.0450977,19.2689063 28.9638281,19.2425391 L27.6046289,18.8008594 C27.1889063,18.6658008 26.9615039,18.219375 27.0965625,17.8036523 C27.2316211,17.3879297 27.6782227,17.1605859 28.0937695,17.2955273 L29.4529688,17.737207 Z' 
                                fillRule='nonzero'>
                                </path>
                                </svg>
                                <span className='nav-link-title'>Populares</span>
                            </div>
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/mais-votados' className='nav-link' activeClassName="active-link">
                            <div className='nav-link-wrap'>
                                <svg id='icon_top_rated' className='nav-icon' viewBox='0 0 30 30' width='100%' height='100%'>
                                    <title>+Votados</title>
                                    <path d='M24.7750847,5.22491532 C24.7021599,5.15199056 24.6169531,5.09595364 24.52407,5.05757218 C24.4304192,5.01919073 24.3313951,5 24.2323709,5 L8.84447835,5.00076763 C8.41997947,5.00076763 8.07684927,5.34466546 8.07684927,5.76839671 C8.07684927,6.19289559 8.4207471,6.53602579 8.84447835,6.53602579 L22.3785467,6.53525816 L5.22510723,23.6894653 C4.92496426,23.9896082 4.92496426,24.4747498 5.22510723,24.7748928 C5.3747949,24.9245804 5.57130794,24.9998081 5.76782099,24.9998081 C5.96433403,24.9998081 6.16084708,24.9245804 6.31053475,24.7748928 L23.4647418,7.62068568 L23.4647418,21.1539864 C23.4647418,21.5784853 23.807872,21.9216155 24.2323709,21.9216155 C24.6568698,21.9216155 25,21.5784853 25,21.1539864 L25,5.76762908 C25,5.66860493 24.9808093,5.56958078 24.9424278,5.47593003 C24.9040464,5.38304691 24.8480094,5.29784008 24.7750847,5.22491532 Z'></path>
                                </svg>
                                <span className='nav-link-title'>+Votados</span>
                            </div>
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/lancamentos' className='nav-link' activeClassName="active-link">
                            <div className='nav-link-wrap'>
                                <svg id='icon_upcoming' className='nav-icon' viewBox='0 0 30 23' width='100%' height='100%'>
                                    <title>Lançamentos</title>
                                    <path d='M27.8791228,1.5271345 C29.0162573,1.5271345 29.9415205,2.4522807 29.9415789,3.58947368 L29.9415789,20.4650877 C29.9415789,21.6022807 29.0163743,22.5274854 27.8791813,22.5274854 L2.06239766,22.5274854 C0.925204678,22.5274854 0,21.6022807 0,20.4650877 L0,3.58947368 C0,2.4522807 0.925204678,1.5271345 2.0622807,1.5271345 L6.60672515,1.5271345 L6.60672515,0.733040936 C6.60672515,0.353391813 6.91450292,0.0455555556 7.29421053,0.0455555556 C7.67391813,0.0455555556 7.98169591,0.353333333 7.98169591,0.733040936 L7.98169591,1.5271345 L11.7244444,1.5271345 L11.7244444,0.733040936 C11.7244444,0.353391813 12.0322222,0.0455555556 12.4119298,0.0455555556 C12.7916374,0.0455555556 13.0994152,0.353333333 13.0994152,0.733040936 L13.0994152,1.5271345 L16.8420468,1.5271345 L16.8420468,0.733040936 C16.8420468,0.353391813 17.1498246,0.0455555556 17.5295322,0.0455555556 C17.9091813,0.0455555556 18.2170175,0.353333333 18.2170175,0.733040936 L18.2170175,1.5271345 L21.9597661,1.5271345 L21.9597661,0.733040936 C21.9597661,0.353391813 22.2676608,0.0455555556 22.6472515,0.0455555556 C23.0269591,0.0455555556 23.3347368,0.353333333 23.3347368,0.733040936 L23.3347368,1.5271345 L27.8791228,1.5271345 Z M24.2157895,8.69216374 C23.8182736,8.69216374 23.4960234,8.36991349 23.4960234,7.97239766 C23.4960234,7.57488183 23.8182736,7.25263158 24.2157895,7.25263158 C24.6133053,7.25263158 24.9355556,7.57488183 24.9355556,7.97239766 C24.9355556,8.36991349 24.6133053,8.69216374 24.2157895,8.69216374 Z M19.5933333,8.69216374 C19.1958175,8.69216374 18.8735673,8.36991349 18.8735673,7.97239766 C18.8735673,7.57488183 19.1958175,7.25263158 19.5933333,7.25263158 C19.9908492,7.25263158 20.3130994,7.57488183 20.3130994,7.97239766 C20.3130994,8.36991349 19.9908492,8.69216374 19.5933333,8.69216374 Z M14.9708187,8.69216374 C14.5733029,8.69216374 14.2510526,8.36991349 14.2510526,7.97239766 C14.2510526,7.57488183 14.5733029,7.25263158 14.9708187,7.25263158 C15.3683345,7.25263158 15.6905848,7.57488183 15.6905848,7.97239766 C15.6905848,8.36991349 15.3683345,8.69216374 14.9708187,8.69216374 Z M10.3483626,8.69216374 C9.95084674,8.69216374 9.62859649,8.36991349 9.62859649,7.97239766 C9.62859649,7.57488183 9.95084674,7.25263158 10.3483626,7.25263158 C10.7458784,7.25263158 11.0681287,7.57488183 11.0681287,7.97239766 C11.0681287,8.36991349 10.7458784,8.69216374 10.3483626,8.69216374 Z M5.72584795,8.69216374 C5.32833212,8.69216374 5.00608187,8.36991349 5.00608187,7.97239766 C5.00608187,7.57488183 5.32833212,7.25263158 5.72584795,7.25263158 C6.12336378,7.25263158 6.44561404,7.57488183 6.44561404,7.97239766 C6.44561404,8.36991349 6.12336378,8.69216374 5.72584795,8.69216374 Z M24.2157895,13.3146784 C23.8182736,13.3146784 23.4960234,12.9924281 23.4960234,12.5949123 C23.4960234,12.1973965 23.8182736,11.8751462 24.2157895,11.8751462 C24.6133053,11.8751462 24.9355556,12.1973965 24.9355556,12.5949123 C24.9355556,12.9924281 24.6133053,13.3146784 24.2157895,13.3146784 Z M19.5933333,13.3146784 C19.1958175,13.3146784 18.8735673,12.9924281 18.8735673,12.5949123 C18.8735673,12.1973965 19.1958175,11.8751462 19.5933333,11.8751462 C19.9908492,11.8751462 20.3130994,12.1973965 20.3130994,12.5949123 C20.3130994,12.9924281 19.9908492,13.3146784 19.5933333,13.3146784 Z M14.9708187,13.3146784 C14.5733029,13.3146784 14.2510526,12.9924281 14.2510526,12.5949123 C14.2510526,12.1973965 14.5733029,11.8751462 14.9708187,11.8751462 C15.3683345,11.8751462 15.6905848,12.1973965 15.6905848,12.5949123 C15.6905848,12.9924281 15.3683345,13.3146784 14.9708187,13.3146784 Z M5.72584795,13.3146784 C5.32833212,13.3146784 5.00608187,12.9924281 5.00608187,12.5949123 C5.00608187,12.1973965 5.32833212,11.8751462 5.72584795,11.8751462 C6.12336378,11.8751462 6.44561404,12.1973965 6.44561404,12.5949123 C6.44561404,12.9924281 6.12336378,13.3146784 5.72584795,13.3146784 Z M24.2157895,17.9371345 C23.8182736,17.9371345 23.4960234,17.6148843 23.4960234,17.2173684 C23.4960234,16.8198526 23.8182736,16.4976023 24.2157895,16.4976023 C24.6133053,16.4976023 24.9355556,16.8198526 24.9355556,17.2173684 C24.9355556,17.6148843 24.6133053,17.9371345 24.2157895,17.9371345 Z M19.5933333,17.9371345 C19.1958175,17.9371345 18.8735673,17.6148843 18.8735673,17.2173684 C18.8735673,16.8198526 19.1958175,16.4976023 19.5933333,16.4976023 C19.9908492,16.4976023 20.3130994,16.8198526 20.3130994,17.2173684 C20.3130994,17.6148843 19.9908492,17.9371345 19.5933333,17.9371345 Z M14.9708187,17.9371345 C14.5733029,17.9371345 14.2510526,17.6148843 14.2510526,17.2173684 C14.2510526,16.8198526 14.5733029,16.4976023 14.9708187,16.4976023 C15.3683345,16.4976023 15.6905848,16.8198526 15.6905848,17.2173684 C15.6905848,17.6148843 15.3683345,17.9371345 14.9708187,17.9371345 Z M10.3483626,17.9371345 C9.95084674,17.9371345 9.62859649,17.6148843 9.62859649,17.2173684 C9.62859649,16.8198526 9.95084674,16.4976023 10.3483626,16.4976023 C10.7458784,16.4976023 11.0681287,16.8198526 11.0681287,17.2173684 C11.0681287,17.6148843 10.7458784,17.9371345 10.3483626,17.9371345 Z M5.72584795,17.9371345 C5.32833212,17.9371345 5.00608187,17.6148843 5.00608187,17.2173684 C5.00608187,16.8198526 5.32833212,16.4976023 5.72584795,16.4976023 C6.12336378,16.4976023 6.44561404,16.8198526 6.44561404,17.2173684 C6.44561404,17.6148843 6.12336378,17.9371345 5.72584795,17.9371345 Z M12.5204678,9.80409357 C12.8621637,9.80409357 13.1391813,10.0811111 13.1391813,10.422924 L13.1391813,14.7673099 C13.1391813,15.1090643 12.8622222,15.3860234 12.5204678,15.3860234 L8.17602339,15.3860234 C7.83426901,15.3860234 7.55730994,15.1090643 7.55730994,14.7673099 L7.55730994,10.422807 C7.55730994,10.0810526 7.83426901,9.80409357 8.17602339,9.80409357 L12.5204678,9.80409357 Z M11.9017544,14.148538 L11.9016959,14.148538 L11.9016959,11.0415789 L8.79473684,11.0415789 L8.79473684,14.148538 L11.9017544,14.148538 Z M27.8791228,21.1526316 C28.2581871,21.1526316 28.5666082,20.8442105 28.5667251,20.4650877 L28.5666667,20.4650877 L28.5666667,3.58947368 C28.5666667,3.21040936 28.2582456,2.9019883 27.8791813,2.9019883 L23.3347953,2.9019883 L23.3347953,3.69602339 C23.3347953,4.07567251 23.0270175,4.38350877 22.6473099,4.38350877 C22.2676608,4.38350877 21.9598246,4.07561404 21.9598246,3.69602339 L21.9598246,2.9019883 L18.217076,2.9019883 L18.217076,3.69602339 C18.217076,4.07567251 17.9091813,4.38350877 17.5295906,4.38350877 C17.149883,4.38350877 16.8421053,4.07561404 16.8421053,3.69602339 L16.8421053,2.9019883 L13.0994737,2.9019883 L13.0994737,3.69602339 C13.0994737,4.07567251 12.7916959,4.38350877 12.4119883,4.38350877 C12.0322807,4.38350877 11.7245029,4.07561404 11.7245029,3.69602339 L11.7245029,2.9019883 L7.98175439,2.9019883 L7.98175439,3.69602339 C7.98175439,4.07567251 7.67397661,4.38350877 7.29426901,4.38350877 C6.9145614,4.38350877 6.60678363,4.07561404 6.60678363,3.69602339 L6.60678363,2.9019883 L2.06239766,2.9019883 C1.68333333,2.9019883 1.37491228,3.21040936 1.37491228,3.58947368 L1.37491228,20.4651462 C1.37491228,20.8442105 1.68333333,21.1526316 2.06239766,21.1526316 L27.8791228,21.1526316 Z' fillRule='nonzero'></path>
                                </svg>
                                <span className='nav-link-title'>Lançamentos</span>
                            </div>
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/em-cartaz' className='nav-link' activeClassName="active-link">
                            <div className='nav-link-wrap'>
                                <svg id='icon_now_playing' className='nav-icon' viewBox='0 0 30 30' width='100%' height='100%'>
                                    <title>Em cartaz</title>
                                    <path d='M27.9847266,7.50322266 C25.9822852,4.03494141 22.749082,1.55390625 18.8806055,0.517382812 C15.0121875,-0.519257812 10.9716797,0.0127148437 7.50322266,2.01527344 C4.03482422,4.01777344 1.55390625,7.25097656 0.517382812,11.1194531 C-0.519140625,14.9878711 0.0128320312,19.0284961 2.01527344,22.4967773 C4.01765625,25.9650586 7.25097656,28.4460937 11.1193945,29.4826172 C12.4111523,29.8287891 13.7219531,30 15.0244336,30 C17.6224219,30 20.1866016,29.3186133 22.4968359,27.9847852 C25.9651172,25.9823437 28.4461523,22.7491406 29.4826758,18.8806641 C30.5192578,15.0121289 29.987168,10.9716211 27.9847266,7.50322266 Z M27.9743555,18.476543 C27.0457617,21.9421289 24.8231836,24.8387109 21.715957,26.6326172 C18.6088477,28.426582 14.989043,28.9030664 11.523457,27.9745898 C8.0578125,27.0459961 5.16128906,24.823418 3.36732422,21.7161914 C1.57341797,18.609082 1.096875,14.9892188 2.02552734,11.5235742 C2.95417969,8.05798828 5.17675781,5.16152344 8.28392578,3.3675 C10.35375,2.17248047 12.6505664,1.56210937 14.9782031,1.56210937 C16.1448047,1.56210937 17.3195508,1.71550781 18.4763672,2.02552734 C21.9419531,2.95412109 24.8385352,5.17669922 26.6324414,8.28392578 C28.4264063,11.3910937 28.9030078,15.0108984 27.9743555,18.476543 Z M22.1940234,13.5850781 L12.5538281,8.01925781 C12.0422461,7.72388672 11.4314648,7.72400391 10.9198828,8.01919922 C10.4083008,8.31451172 10.1028516,8.84355469 10.1028516,9.43423828 L10.1028516,20.5658789 C10.1028516,21.1565625 10.4082422,21.6855469 10.9198828,21.980918 C11.1756445,22.1286328 11.4561328,22.2024023 11.7367383,22.2024023 C12.0174023,22.2024023 12.2980078,22.128457 12.5537695,21.9808594 L22.194082,16.4150977 C22.7056055,16.119668 23.0109375,15.5906836 23.0109375,15 C23.0109375,14.409375 22.7055469,13.8803906 22.1940234,13.5850781 Z M21.4132031,15.0629297 L11.7729492,20.6286914 C11.7611719,20.6355469 11.7366211,20.649668 11.7005273,20.6286914 C11.6643164,20.6077734 11.6643164,20.5795312 11.6643164,20.5659375 L11.6643164,9.43429687 C11.6643164,9.42070312 11.6643164,9.39246094 11.7005273,9.37154297 C11.714707,9.36333984 11.7270703,9.36052734 11.7376172,9.36052734 C11.7540234,9.36052734 11.7658594,9.36738281 11.7730664,9.37154297 L21.4132617,14.9373633 C21.4250391,14.9441602 21.4494727,14.9582812 21.4494727,15.0001172 C21.4494727,15.0419531 21.4249219,15.0561328 21.4132031,15.0629297 Z M24.2169727,7.87734375 C22.3601953,5.47863281 19.5689648,3.86707031 16.5588867,3.45580078 C16.1321484,3.39738281 15.7380469,3.69638672 15.6796289,4.12371094 C15.6213281,4.55091797 15.920332,4.94455078 16.3475391,5.00296875 C18.9556641,5.35927734 21.3738867,6.75544922 22.9822266,8.83318359 C23.1360937,9.03193359 23.3668945,9.13599609 23.6001562,9.13599609 C23.7670898,9.13599609 23.9353125,9.08273437 24.0774609,8.97257813 C24.418418,8.70867187 24.4808789,8.21830078 24.2169727,7.87734375 Z' fillRule='nonzero'></path>
                                </svg>
                                <span className='nav-link-title'>Em cartaz</span>
                            </div>
                            </NavLink>
                        </li>


                        </ul>
                    </div>
                    </div>
                </nav>
                <header>
                    <div className='header-search'>
                            <svg id='iconSearch' viewBox='0 0 30 30' width='100%' height='100%'>
                            <title>Pesquisar</title>
                            <path d='M21.9140625,18.28125 C23.0859375,16.4375 23.7734375,14.25 23.7734375,11.8984375 C23.7734375,5.328125 18.453125,0 11.890625,0 C5.3203125,0 0,5.328125 0,11.8984375 C0,18.46875 5.3203125,23.796875 11.8828125,23.796875 C14.265625,23.796875 16.484375,23.09375 18.34375,21.890625 L18.8828125,21.515625 L27.3671875,30 L30,27.3203125 L21.5234375,18.8359375 L21.9140625,18.28125 Z M18.546875,5.25 C20.3203125,7.0234375 21.296875,9.3828125 21.296875,11.890625 C21.296875,14.3984375 20.3203125,16.7578125 18.546875,18.53125 C16.7734375,20.3046875 14.4140625,21.28125 11.90625,21.28125 C9.3984375,21.28125 7.0390625,20.3046875 5.265625,18.53125 C3.4921875,16.7578125 2.515625,14.3984375 2.515625,11.890625 C2.515625,9.3828125 3.4921875,7.0234375 5.265625,5.25 C7.0390625,3.4765625 9.3984375,2.5 11.90625,2.5 C14.4140625,2.5 16.7734375,3.4765625 18.546875,5.25 Z' stroke='none' fillRule='nonzero'></path>
                            </svg>
                            <input id='search-input' type='text' placeholder='Pesquisar por um filme...'
                                name='query' autoComplete='off' onKeyPress={ this.handleSubmit } onChange={ this.onChange } />
                    </div>
                </header>
            </div>
            </div>
        )
    }
}

export default Navbar