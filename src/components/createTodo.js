import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit= { this.onCreateTodoHandler.bind(this) }>
                <input type="text" ref="createTodoInput" placeholder="Enter new todo" />
                <button>Create</button>
            </form>
        );
    }

    onCreateTodoHandler(e) {
        e.preventDefault();
        const task = this.refs.createTodoInput.value;

        this.refs.createTodoInput.value = '';
        
        if (!task.trim()) {
            return;
        }

        this.props.createTodo(task);
    };
}