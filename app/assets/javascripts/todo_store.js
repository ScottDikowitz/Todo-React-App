(function(){
  "use strict";
  var _todos = [];
  var _todoSteps = {};
  var _callbacks = [];
  var TodoStore = window.TodoStore = {};


  TodoStore.addChangedHandler = function(callback){
    _callbacks.push(callback);
  };

  TodoStore.removeChangeHandler = function(callback){
    var idx = _callbacks.indexOf(callback);
    _callbacks.splice(idx, 1);
  };

  TodoStore.all = function(){
    return _todos.slice();
  };

  TodoStore.stepsAll = function(todoId){
    return _todoSteps[todoId].slice();
  };

  TodoStore.fetchSteps = function(todo){
    var temp;
    $.ajax({
      url: "/api/todos/" + todo.id + "/todo_steps",
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // debugger;
        _todoSteps[todo.id] = data;
        temp = data;
        TodoStore.changed();
      }
    });
  };

  TodoStore.fetch = function(){
    $.ajax({
      url: "/api/todos",
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        _todos = data;
        TodoStore.changed();
      }
    });
  };

  TodoStore.createStep = function(todoStep){
    $.ajax({
      url: "/api/todos/" + todoStep.todo_id + "/todo_steps",
      type: 'POST',
      dataType: 'json',
      data: { todo_step: todoStep },
      success: function(data) {
        _todoSteps[todoStep.todo_id].push(data);
        TodoStore.changed();
      }
    });
  };


  TodoStore.create = function(todo){
    $.ajax({
      url: "/api/todos",
      type: 'POST',
      dataType: 'json',
      data: { todo: todo },
      success: function(data) {
        _todos.push(data);
        TodoStore.changed();
      }
    });
  };

  TodoStore.changed = function(){
    _callbacks.forEach(function(callback){
      callback();
    });
  };

  TodoStore.removeById = function(id){

    _todos.forEach(function(todo, index){
      if (todo.id === id){
        _todos.splice(index, 1);
        return;
      }
    });
  };

  TodoStore.destroy = function(id){
    $.ajax({
      url: "/api/todos/" + id,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        TodoStore.removeById(data.id);
        TodoStore.changed();
      }
    });
  };

  TodoStore.toggleDone = function(todo){
    $.ajax({
      url: "/api/todos/" + todo.id,
      type: 'PATCH',
      dataType: 'json',
      data: {todo: todo},
      success: function(data) {
        TodoStore.changed();
      }
    });
  };







})();
