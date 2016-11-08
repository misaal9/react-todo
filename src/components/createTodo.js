import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        return (
            <div className="row">
                <form onSubmit= { this.onCreateTodoHandler.bind(this) }>
                    <div className="col s9">
                        <input type="text" ref="createTodoInput" placeholder="Enter new todo" />
                    </div>
                    <div className="col s2 push-s1">
                        <button className="btn-large waves-effect waves-light center-align">Create</button>
                    </div>
                </form>
            </div>
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