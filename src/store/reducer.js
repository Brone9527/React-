import {DELETE_TODO_ITEM, CHANGE_INPUT_VALUE, ADD_TODO_ITEM} from './actionTypes'

const defaultStore = {
    inputValue: '',
    list: []
}


//reducer 不能改变store的数据
export default (state = defaultStore, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}