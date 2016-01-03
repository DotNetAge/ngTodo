import { Injectable } from "angular2/core"


@Injectable()
export class TodoStorage {
	private STORAGE_ID = "todo-angular2";

	constructor() {}

	get(){
		return JSON.parse(localStorage.getItem(this.STORAGE_ID)) || [];
	}

	put(todos) {
		localStorage.setItem(this.STORAGE_ID,JSON.stringify(todos));
	}
}