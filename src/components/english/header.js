import React, { Component } from 'react';
import Select from 'react-select';
import '../../../node_modules/flag-icon-css/css/flag-icon.css';
 
class Header extends Component {
	state = {
        show: false,    // Side Menu Toggle
        option: { value: 'english', label: <span className="language d-inline-block"><i className="flag-icon flag-icon-us"></i> English</span> }
    }

    openSideMenu = () => this.setState({show: true})
    closeSideMenu = () => this.setState({show: false});

    render() {
        const options = [
            { value: 'english', label: <span className="language d-inline-block"><i className="flag-icon flag-icon-us"></i> English</span> },
            { value: 'arabic', label: <span className="language d-inline-block"><i className="flag-icon flag-icon-sa"></i> العربية</span> },
        ];
        return (
            <header>
                {/* Navigation */}
                <nav className="navbar navbar-top-default navbar-expand-lg navbar-standard">
                    <div className="container">
                        <a href="#home" title="Logo" className="link logo scroll">
                            {/* Logo Default */}
                            <img src="parallax/img/logo.svg" className="logo-dark" alt="logo" />
                        </a>

                        <ul id="menu" className="d-none d-lg-block alt-font" style={{backgroundColor:"rgba(0, 0, 0, 0.5)", padding: "12px", borderRadius: "15px", whiteSpace: "nowrap" }}>
                            <li ><a className="link leater-space" href="#home">Home</a></li>
                            
                            <li><a className="link leater-space" href="#services">Our Services</a></li>          
                            <li><a className="link leater-space" href="#portfolio">Portfolio</a></li>
                            <li><a className="link leater-space" href="#about">About</a></li>
                            <li><a className="link leater-space" href="#contact">Contact</a></li>
                            <li style={{width: "130px", }}>
                                <Select
                                    className="selectpicker"
                                    value={this.props.language}
                                    options={options}
                                    isSearchable={false}
                                    defaultValue="english"
                                    // menuIsOpen 
                                    theme= {{ colors: "#fff" }}
                                    styles={{menu: (provided, state) => ({
                                            background: "rgba(0, 0, 0, 0.5)",
                                            position: "absolute",
                                            top: "45px",
                                            width: "100%",
                                            border: "1px solid black",
                                            borderRadius: "5px"
                                        })
                                    }}
                                    onChange={this.props.changeLanguage}
                                />
                            </li>

                        </ul>

                        {/* Side Menu Button */}
                        <div className="side-nav-btn animated-wrap" onClick={this.openSideMenu}>
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
                        <span className="btn-close" onClick={this.closeSideMenu}><i></i><i></i></span>
                        <nav className="side-nav">
                            <ul className="navbar-nav" id="side-menu">
                                <li className="nav-item">
                                    <a className="nav-link link" href="#home" onClick={this.closeSideMenu}>Home</a>
                                </li>
                            
                                <li className="nav-item">
                                    <a className="nav-link link" href="#services" onClick={this.closeSideMenu}>Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="#portfolio" onClick={this.closeSideMenu}>Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="#about" onClick={this.closeSideMenu}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link" href="#contact" onClick={this.closeSideMenu}>Contact</a>
                                </li>
                                <li className="nav-item" style={{width: "130px", }}>
                                    <Select
                                        className="selectpicker"
                                        value={this.props.language}
                                        options={options}
                                        isSearchable={false}
                                        defaultValue="english"
                                        // menuIsOpen 
                                        theme= {{ colors: "#fff" }}
                                        styles={{menu: (provided, state) => ({
                                                background: "rgba(0, 0, 0, 0.5)",
                                                position: "absolute",
                                                top: "45px",
                                                width: "100%",
                                                border: "1px solid black",
                                                borderRadius: "5px"
                                            })
                                        }}
                                        onChange={this.props.changeLanguage}
                                    />
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
                            <p className="whitecolor">All rights reserved &copy; 2021 <a className="web-link text-white" href="http://www.crewsa.net/" target="_blank" rel="noreferrer"> CREW </a></p>
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