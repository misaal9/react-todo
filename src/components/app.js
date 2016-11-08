import React from 'react';
import ToDoTable from './todoTable';
import CreateTodo from './createTodo';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>ToDos App</h1>
                <CreateTodo />
                <ToDoTable />
            </div>
        );
    }
}