 var TodoListItem = React.createClass({

   getInitialState: function(){
     return {detailViewVisible: false};
   },

  handleDestroy: function(){
    TodoStore.destroy(this.props.todo.id);
  },

  handleCollapse: function(){
    this.setState({detailViewVisible: !this.state.detailViewVisible});
  },

  render: function(){

      var detView;
      var steps;
    if (this.state.detailViewVisible){
      detView = <TodoDetailView handleDestroy={this.handleDestroy} todo={this.props.todo}/>;
    }

   return (
    <div key={this.props.todo.id}>
      <div onClick={this.handleCollapse}>{this.props.todo.title}</div>
      {detView}
    </div>
    );

  }
 });
