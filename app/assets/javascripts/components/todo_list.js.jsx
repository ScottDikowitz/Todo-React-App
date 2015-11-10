var TodoList = React.createClass({

  getInitialState: function(){
    return {todos: TodoStore.all()};
  },

  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function(){
    TodoStore.removeChangeHandler(this.todosChanged);

  },

  todosChanged: function(){
    this.setState({todos: TodoStore.all()});
  },

  render: function(){
    return (
      <div>
        <TodoForm />
        {this.state.todos.map(function(todo){
          return (
            <div>
              <TodoListItem todo={todo}/>
              <DoneButton todo={todo} />
            </div>
          );
        })}
      </div>
    );
  }
});
