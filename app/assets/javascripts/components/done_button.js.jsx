var DoneButton = React.createClass({

  handleDone: function(){
    if (this.props.todo.done){
      this.props.todo.done = false;
    } else {
      this.props.todo.done = true;
    }
    TodoStore.toggleDone(this.props.todo);
  },


  render: function(){

    var completed;

    if (this.props.todo.done){
      completed = "undo";
    } else {
      completed = "done";
    }
    return(
      <button onClick={this.handleDone}>{completed}</button>
    );
  }
});
