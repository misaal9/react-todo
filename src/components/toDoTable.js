import React from 'react';
import ToDoHeader from './todoHeader';
import ToDoList from './todoList';

const todos = [
    {
        task: 'Task 11',
        isComplete: false
    },
    {
        task: 'Task 22',
        isComplete: false
    },
    {
        task: 'Task 33',
        isComplete: false
    }
]

export default class ToDoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        };
    }

    render() {
        return (
            <table>
                <ToDoHeader />
                <ToDoList todos = { this.state.todos } />
            </table>
            
        );
    }
}