import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.todos != nextProps.todos) return true;
        else return false;
    }

    render() {
        console.log("TodoItemList is Rendered!!")
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}></TodoItem>
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;