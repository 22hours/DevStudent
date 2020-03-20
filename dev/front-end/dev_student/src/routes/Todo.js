import React, { Component } from 'react'
import TodoListTemplate from './TodoListTemplate'
import Form from '../components/Form';
import TodoItemList from '../components/TodoItemList';
class Todo extends Component {

    id = 3
    state = {
        input: '',
        todos: [
            { id: 0, text: "React Info0", checked: false },
            { id: 1, text: "React Info1", checked: true },
            { id: 2, text: "React Info2", checked: false }
        ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        });
    }

    handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            this.handleCreate();
        }
    }


    handleOnToggle = (id) => {
        console.log(id + 'toggle');
        const { todos } = this.state;
        const idx = todos.findIndex(item => item.id === id);
        const selected = todos[idx]
        const nextTodos = [...todos];
        nextTodos[idx] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }

    handleOnRemove = (id) => {
        console.log(id + "remove")
        const { todos } = this.state;
        const idx = todos.findIndex(item => item.id === id);
        const selected = todos[idx]
        this.setState({
            todos: [
                ...todos.slice(0, idx),
                ...todos.slice(idx + 1, todos.length)
            ]
        });
    }

    handleOnRemoveEasy = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(item => item.id != id)
        });
    }

    render() {
        console.log("Todo.js Rendered!")
        const { input, todos } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleOnToggle,
            handleOnRemove,
            handleOnRemoveEasy
        } = this;

        return (
            <TodoListTemplate form={<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate}></Form>}>
                <TodoItemList todos={todos} onToggle={handleOnToggle} onRemove={handleOnRemove}></TodoItemList>
            </TodoListTemplate>
        );
    };
}

const onCreate = () => {
    console.log("hi!");
}

export default Todo;