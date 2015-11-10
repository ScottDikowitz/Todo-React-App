

Todo.create({title: "My List", body: "Stuff I plan to do.", done: false})

TodoStep.create({todo_id: Todo.first.id, content: "step1 I don't know", completed: false})
