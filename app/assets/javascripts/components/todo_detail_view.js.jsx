var TodoDetailView = React.createClass({
  getInitialState: function(){
    return {steps: []};
  },

  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todoStepsChanged);
    TodoStore.fetchSteps(this.props.todo);
  },

  componentWillUnmount: function(){
    TodoStore.removeChangeHandler(this.todosStepsChanged);

  },

  todoStepsChanged: function(){
    this.setState({steps: TodoStore.stepsAll(this.props.todo.id)});

  },

  render: function(){
    return  <div>
              <div>{this.props.todo.body}</div>
              {this.state.steps.map(function(step){

                return <p>{step.content}</p>;

              })}
              <TodoStepForm todo={this.props.todo}/>
              <button onClick={this.props.handleDestroy}> Delete </button>
            </div>;


  }


});
