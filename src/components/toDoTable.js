import React from 'react';
import ToDoHeader from './todoHeader';
import ToDoList from './todoList';
import CreateTodo from './createTodo';

const todos = [
    {
        task: 'Setup environment on machine',
        isComplete: false
    },
    {
        task: 'Watch tutorials on React Todo App',
        isComplete: true
    },
    {
        task: 'Implement the tutorial locally',
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
    
    onCreateTodoHandler(task) {
        this.state.todos.push({
            task,
            isComplete: false
        });
        
        this.setState({ todos: this.state.todos });
    }
    
    toggleStatus(task) {
        const selectedTask = _.find(this.state.todos, function(todo){
            return todo.task === task;
        });
        selectedTask.isComplete = !selectedTask.isComplete;
        this.setState({ todos: this.state.todos });
    };
    
    deleteTask(task) {
        _.remove(this.state.todos, function(todo){
            return todo.task === task;
        }, this);
        this.setState({
            todos: this.state.todos
        });
    }
    
    saveTask(oldTask, newTask) {
        const selectedTask = _.find(this.state.todos, function(todo){
            return todo.task === oldTask;
        });

        selectedTask.task = newTask;
        
        this.setState({
            todos: this.state.todos
        });
    }

    render() {
        return (
            <div>    
                <CreateTodo createTodo = { this.onCreateTodoHandler.bind(this) }/>
                <table className="highlight centered bordered">
                    <ToDoHeader />
                    <ToDoList saveTask = { this.saveTask.bind(this) } deleteTask = { this.deleteTask.bind(this) } toggleStatus = { this.toggleStatus.bind(this) } todos = { this.state.todos } />
                </table>
            </div>
            
        );
    }
}