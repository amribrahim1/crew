import React, { Component } from 'react';
import $ from 'jquery';
// import './App.css';
import './App.scss';

import Sections from './components/sections'
import Header from './components/header';
import Cursor from "./components/cursor";

class App extends Component {
	state = {
        render: false,
		playState: "stop",
    }
	
	componentDidMount() {
		setTimeout(() => {
			$("#loader-fade").fadeOut("slow");
		}, 1000)
		setTimeout(() => { //Start the timer
			this.setState({render: true})
		}, 1000)
	}

	render() {
		console.log(this.state)
		return (
			<>
			<Header />
			<Sections />
			
			<Cursor />
			</>
		)
	}
}

export default App;


