var TodoForm = React.createClass({
  getInitialState: function(){
    return {title: "", body: ""};
  },


  updateTitle: function(e){

    this.setState({title: e.currentTarget.value});
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function(){
    TodoStore.create({title: this.state.title, body: this.state.body, done: false});
    var elements = document.getElementsByClassName("submit-field");
    elements[0].value = "";
    elements[1].value = "";
    this.setState({title: "", body: ""});
  },

  render: function(){
    return (
      <div>
        <input className="submit-field" type="text" onChange={this.updateTitle}/>
        <input className="submit-field" type="text" onChange={this.updateBody}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );

  }

});
