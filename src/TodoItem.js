import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
	
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	render(){
		const {content, test} = this.props;
		return <div onClick={this.handleClick} >{test} - {content}</div>
	}
	
	handleClick(){
		const {deleteItem, index} = this.props;
		deleteItem(index) 
	}
	
	//一个组件要从父组件接受参数
	//只要父组件的render函数被重新执行了，子组件这个生命周期函数就会被执行
	//或者可以这样理解：
	//如果一个组件第一次存在于父组件的，不会执行
	//如果这个组件已经存在于父组件中，才会执行
	UNSAFE_componentWillReceiveProps(){
		console.log('child componentWillReceiveProps');
	}
	
	
	//组件被移除时会被执行
	componentWillUnmount(){
		console.log('child componentWillUnmount')
	}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem;