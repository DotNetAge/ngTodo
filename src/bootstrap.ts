import { bootstrap } from "angular2/platform/browser";
import { TodoApp } from "./todoApp";
import { TodoStorage } from "./todoStorageService";

bootstrap( TodoApp, [TodoStorage]);