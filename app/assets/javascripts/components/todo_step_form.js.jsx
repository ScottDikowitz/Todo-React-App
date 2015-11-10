var TodoStepForm = React.createClass({
  getInitialState: function(){
    return {content: ""};
  },


  updateContent: function(e){

    this.setState({content: e.currentTarget.value});
  },


  handleSubmit: function(){
    TodoStore.createStep({todo_id: this.props.todo.id, content: this.state.content, completed: false});
  },

  render: function(){
    return (
      <div>
        <input className="submit-field" type="text" onChange={this.updateContent}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );

  }

});
