import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit= { this.onCreateTodoHandler.bind(this) }>
                <input type="text" ref="createTodo" placeholder="Enter new todo" />
                <button>Create</button>
            </form>
        );
    }

    onCreateTodoHandler(e) {
        e.preventDefault();
        console.info(this.refs.createTodo.value);
    };
}