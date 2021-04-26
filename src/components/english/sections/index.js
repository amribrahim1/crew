import React, { Component } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Home from './home';
import Services from './services';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';
import Loading from '../../loading';

class Sections extends Component {
    state = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
    }
    
    componentDidMount() {
        
    }

    onLeave(origin, destination, direction) {
        // console.log("Leaving section " + origin.index);
        // setTimeout(() => {
        //     this.setState({
        //         ...this.state,
        //         [origin.index]: true
        //     })
        // }, 1000)
    }
    
    afterLoad(origin, destination, direction) {
        // console.log(origin);
        // console.log(destination);
        // console.log(direction);
        this.setState({
            ...this.state,
            [destination.index]: true
        })
    }

    render() {
        // console.log(this.state)
        return (
            // <Contact />
            <ReactFullpage
                // scrollOverflow={true}
                anchors= {["home", "services", "portfolio", "about", "contact"]}
                navigation
                scrollingSpeed= {1000}
                fixedElements= '.slider-social'
                onLeave={this.onLeave.bind(this)}
                afterLoad={this.afterLoad.bind(this)}
                id="page-scroll"
                style={{width: "100%", height: "635px !important"}}
                fadingEffect
                // dragAndMove="false"
                render={({ state, fullpageApi }) => {
                    // console.log(state)
                    if (state.initialized === undefined || (state.initialized && state.initialized===false)) {
                        return (
                            <div className=" m-auto section" >
                                <div className="text-center" style={{marginBottom: "100vh"}}><Loading /></div>
                            </div>
                        )
                    }
                    return (
                        <div>
                            <div className="section section1">
                                {state.destination && 
                                    state.destination.index === 0
                                        ? <Home />
                                        : this.state[0] === true
                                            ? <Home /> : ""
                                }
                            </div>
                            <div className="section section2 bg-services pp-section pp-table">
                                {state.destination && 
                                    state.destination.index === 1
                                        ? <Services />
                                        : this.state[1] === true
                                            ? <Services /> : ""
                                }
                            </div>
                            <div className="section section3 fp-auto-height-responsive">
                                {state.destination && 
                                    state.destination.index === 2
                                        ? <Portfolio />
                                        : this.state[2] === true
                                            ? <Portfolio /> : ""
                                }   
                            </div>
                            <div className="section section4">
                                {state.destination && 
                                    state.destination.index === 3
                                        ? <About />
                                        : this.state[3] === true
                                            ? <About /> : ""
                                }   
                            </div>
                            <div className="section section5">
                                {state.destination && 
                                    state.destination.index === 4
                                        ? <Contact />
                                        : this.state[4] === true
                                            ? <Contact /> : ""
                                }   
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}

export default Sections;