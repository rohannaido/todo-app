import Project from "./Project";
import Task from "./task";
import TodoList from "./TodoList";

export default class Storage{
    static saveTodoList(todoList){
        localStorage.setItem("TODO_LIST", JSON.stringify(todoList));
    }

    static getTodoList(){
        let myTodoList = JSON.parse(localStorage.getItem("TODO_LIST"));
        if(!myTodoList){
            return new TodoList();
        }

        //List Object
        myTodoList = Object.assign(new TodoList(), myTodoList);

        // Project Objects
        myTodoList.setProjects(myTodoList.getProjects().map((project) => Object.assign(new Project(), project)));

        // Active Project
        myTodoList.setActiveProject(myTodoList.getDefaultProject());

        //Task Objects
        myTodoList.getProjects().map((project) => project.setTasks(
            project.getTasks().map((task) => Object.assign(new Task(), task))
        ));
        
        console.log(myTodoList);
        return myTodoList;
    }

    static addProject(project){
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }


}