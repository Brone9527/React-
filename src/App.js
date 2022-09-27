import React, { Component, Fragment } from "react";
import { CSSTransition} from 'react-transition-group';
import './style.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state  = {
			show:true
		}
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}
	render(){
		return (
		<Fragment>
		<CSSTransition
		in = {this.state.show}
		timeout = {1000}
		classNames = 'fade'
		unmountOnExit
		// onEntered = {(el) => {el.style.color='blue'}}
		>
		 <div>hello world</div>
		</CSSTransition>
		 <button onClick = {this.handleBtnClick}>toggle</button>
		</Fragment>
		)
	}
	
	handleBtnClick(){
		this.setState({
			show: this.state.show ? false : true
		})
	}
}



export default App;