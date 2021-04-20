import React, { Component } from 'react';

class Header extends Component {
	state = {
        show: false,    // Side Menu Toggle
    }

    openSideMenu = () => this.setState({show: true})
    closeSideMenu = () => this.setState({show: false})

    render() {
        return (
            <header>
                {/* Navigation */}
                <nav className="navbar navbar-top-default navbar-expand-lg navbar-standard">
                    <div className="container">
                        <a href="#home" title="Logo" className="link logo scroll">
                            {/* Logo Default */}
                            <img src="parallax/img/logo.svg" className="logo-dark" alt="logo" />
                        </a>

                        <ul id="menu" className="d-none d-lg-block alt-font" style={{backgroundColor:"rgba(0, 0, 0, 0.5)", padding: "12px", borderRadius: "15px" }}>
                            <li ><a className="link leater-space" href="#home">Home</a></li>
                            
                            <li><a className="link leater-space" href="#services">Our Services</a></li>          
                            <li><a className="link leater-space" href="#portfolio">Portfolio</a></li>
                            <li><a className="link leater-space" href="#about">About</a></li>
                            <li><a className="link leater-space" href="#contact">Contact</a></li>

                        </ul>

                        {/* Side Menu Button */}
                        <div className="side-nav-btn animated-wrap" id="sidemenu_toggle" onClick={this.openSideMenu}>
                            <div className="animated-element animated-elementH" style={{width: "20px"}} >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* side menu */}
                <div className={this.state.show ? "side-menu side-menu-active" : "side-menu"}>
                    <div className="inner-wrapper">
                        <span className="btn-close" id="btn_sideNavClose" onClick={this.closeSideMenu}><i></i><i></i></span>
                        <nav className="side-nav">
                            <ul className="navbar-nav" id="side-menu">
                                <li className="nav-item">
                                    <a className="nav-link link" href="#home">Home</a>
                                </li>
                            
                                <li className="nav-item">
                                    <a className="nav-link link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="side-footer text-white w-100">
                            <ul className="social-icons-simple">
                                <li><a href="https://www.facebook.com/crew.sa.18" target="_blank" rel="noreferrer" className="facebook_bg_hvr2"> <i className="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
                                <li><a href="https://twitter.com/CrewSa2020"  target="_blank" rel="noreferrer" className="twitter_bg_hvr2"> <i className="fab fa-twitter" aria-hidden="true"></i></a> </li>
                                <li><a href="https://www.youtube.com/channel/UCc3qxfDgNMKnpv_KeiL6mdQ?view_as=subscriber" target="_blank" rel="noreferrer" className="linkdin_bg_hvr2"> <i className="fab fa-youtube" aria-hidden="true"></i></a> </li>
                                <li><a href="https://www.instagram.com/crewsa2020/?hl=en" target="_blank" rel="noreferrer" className="instagram_bg_hvr2"> <i className="fab fa-instagram" aria-hidden="true"></i></a> </li>
                            </ul>
                            <p className="whitecolor">All rights reserved &copy; 2020 <a className="web-link text-white" href="http://www.crewsa.net/" target="_blank" rel="noreferrer"> CREW </a></p>
                        </div>
                    </div>
                </div>
                {/* End side menu */}


                {/* slider social */}
                <div className="slider-social d-md-block d-none" style={{backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius: "15px"}}>
                    <ul className="list-unstyled">
                        <li className="animated-wrap"><a className="animated-element" href="https://www.facebook.com/crew.sa.18" target="_blank" rel="noreferrer"> <i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li className="animated-wrap"><a className="animated-element" href="https://twitter.com/CrewSa2020" target="_blank" rel="noreferrer"> <i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li className="animated-wrap"><a className="animated-element" href="https://www.youtube.com/channel/UCc3qxfDgNMKnpv_KeiL6mdQ?view_as=subscriber"  target="_blank" rel="noreferrer"> <i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                        <li className="animated-wrap"><a className="animated-element" href="https://www.instagram.com/crewsa2020/?hl=en" target="_blank" rel="noreferrer"> <i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>

            </header>
	    )
    }
}

export default Header