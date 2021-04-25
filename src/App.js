import React, { Component } from 'react';
import $ from 'jquery';
// import './App.css';
// import Cookies from 'universal-cookie';
import './App.scss';

import Loading from './components/loading';
import Sections from './components/sections'
import Header from './components/header';
import Cursor from "./components/cursor";

import ArHeader from './components/arabic/header';
import ArSections from './components/arabic/sections';

class App extends Component {
	state = {
        render: false,
		playState: "stop",
		language: { value: 'english', label: <span className="language d-inline-block"><i className="flag-icon flag-icon-us"></i> English</span> }
    }

	changeLanguage = e => {
        console.log(e)
        this.setState({
            language: e
        })
    }
	
	componentDidMount() {
		setTimeout(() => {
			$("#loader-fade").fadeOut("slow");
		}, 1000)
		setTimeout(() => { //Start the timer
			this.setState({render: true})
		}, 1000)
		this.state.language.value === "arabic" && document.body.classList.add("arabic")
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.language !== this.state.language) {
			this.state.language.value === "arabic" ? document.body.classList.add("arabic") : document.body.classList.add("english");
			/*
			const cookies = new Cookies();
			cookies.set('language', this.state.language.value, { path: '/' });
			console.log(cookies.get('language')); // Pacman
			*/
		}
	}

	render() {
		console.log(this.state)
			return (
				<>
				<Loading />
				{this.state.language.value === "english" ? <Header changeLanguage={this.changeLanguage} /> : <ArHeader changeLanguage={this.changeLanguage} /> }
				{this.state.language.value === "english" ? <Sections /> : <ArSections /> }
				<Sections language={this.state.language.value} />
				
				<Cursor />
				</>
			)
		
		
	}
}

export default App;


