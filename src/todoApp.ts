import { Component, View } from  "angular2/core";
import { TodoStorage } from "./todoStorageService";
import { Todo } from "./todoItem";

@Component({ 
	selector: "todo-app", 
	templateUrl: "app/todo-list.html",
	styleUrls:["app/todo.css"]
})
export class TodoApp {
	//selected_item: Todo;
	title = "todos";
	todos: Todo[];

	constructor(private storage: TodoStorage) {
		this.todos = storage.get() || [];
	}

	addItem(todoItem){
		this.todos.push(new Todo(todoItem));
		this.storage.put(this.todos);
	}

	setDone(target) {
		this.storage.put(this.todos);
	}

	onDelete(todoItem) {	
		//this.todos
		
	}
}