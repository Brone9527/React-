import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

class TodoList extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}	
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}
	
	
	render(){
		console.log('parent render');
		return(
		<Fragment>
			<div>
			{/*下面是一个input框*/}
			<label htmlFor='insertArea'>请输入内容</label>
			<input 
			id = 'insertArea'
			className = 'input' 
			value = {this.state.inputValue} 
			onChange={this.handleInputChange}
			/>
			<button onClick={this.handleBtnClick}>提交</button></div>
			<ul >{this.getTodoItem()}
			</ul>
		</Fragment>
		)
	}
	
	componentDidMount(){
		axios.get('/api/todoList')
		.then((res) => {
			this.setState(() => ({
				list: [...res.data]
				}));
		})
		.catch(() => {(alert('error'))})
	}
	
	getTodoItem(){
		return this.state.list.map((item, index) => {
			return (
			<TodoItem 
			key = {item}
			content = {item} 
			index={index}
			deleteItem = {this.handleItemDelete}
			/>
			)
		})
	}
	
	handleInputChange(e){
		//console.log(this)
		const value = e.target.value;
		this.setState(() =>({
			inputValue: value
		}))
		// this.setState({
		// 	inputValue: e.target.value
		// })
	}
	
	handleBtnClick(e){
		this.setState((prevState) =>({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
		
		//console.log(this.ul.querySelectorAll('div').length);
		// this.setState({
		// 	list: [...this.state.list,this.state.inputValue],
		// 	inputValue: ''
		// })
	}
	
	handleItemDelete(index){
		
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		})
		// this.setState({
		// 	list: list
		// })
		//console.log(index);
	}
}

export default TodoList;