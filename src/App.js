import React, { Component } from 'react';
import $ from 'jquery';
// import './App.css';
import Cookies from 'universal-cookie';
import './App.scss';

import Loading from './components/loading';
import Sections from './components/english/sections'
import Header from './components/english/header';
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
        // console.log(e)
        this.setState({
            language: e
        })
    }
	
	componentDidMount() {
		console.log($("html.touch"))
		setTimeout(() => {
			$("#loader-fade").fadeOut("slow");
		}, 1000);
		// this.state.language.value === "arabic" && document.body.classList.add("arabic");
		const cookies = new Cookies();
		// console.log(navigator.language || navigator.userLanguage);
		const lang = navigator.language || navigator.userLanguage
		cookies.get('language') 
			? this.setState({language: { value: cookies.get('language'), label: <span className="language d-inline-block"><i className={`text-capitalize flag-icon flag-icon-${cookies.get('language') === "english" ? "us" : "sa"}`}></i> {cookies.get('language') === "english" ? "English" : "العربية"}</span> }})
			: lang[0]+lang[1] === "ar"
				? this.setState({language: { value: 'arabic', label: <span className="language d-inline-block"><i className="flag-icon flag-icon-sa"></i> العربية</span> }})
				: this.setState({language: { value: 'english', label: <span className="language d-inline-block"><i className="flag-icon flag-icon-us"></i> English</span> }})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.language !== this.state.language) {
			switch (this.state.language.value) {
				case "english" :
					document.body.classList.add("english");
					document.body.classList.remove("arabic");
					break
				case "arabic" :
					document.body.classList.add("arabic");
					document.body.classList.remove("english");
					break
				default : 
					document.body.classList.remove("arabic");
					document.body.classList.remove("english");
			}
			
			const cookies = new Cookies();
			cookies.set('language', this.state.language.value, { path: '/' });
			// console.log(cookies.get('language'));
			
		}
	}

	render() {
		// console.log(this.state)
			return (
				<>
				<Loading />
				{this.state.language.value === "english" ? <Header language={this.state.language} changeLanguage={this.changeLanguage} /> : <ArHeader language={this.state.language} changeLanguage={this.changeLanguage} /> }
				{this.state.language.value === "english" ? <Sections /> : <ArSections /> }
				<Sections language={this.state.language.value} />
				
				<Cursor />
				</>
			)
		
		
	}
}

export default App;


