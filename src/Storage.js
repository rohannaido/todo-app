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
        // myTodoList.setActiveProject(myTodoList.getDefaultProject());

        //Task Objects
        myTodoList.getProjects().map((project) => project.setTasks(
            project.getTasks().map((task) => Object.assign(new Task(), task))
        ));
        
        // console.log(myTodoList);
        return myTodoList;
    }

    static addProject(project){
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static addTask(projectName, task){
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(task);
        Storage.saveTodoList(todoList);
    }
    static setActive(projectName){
        const todoList = Storage.getTodoList();
        todoList.setActiveProject(projectName);
        Storage.saveTodoList(todoList);
    }

    static updateTask(projectName, taskTitle, newTaskTitle){
        const todoList = Storage.getTodoList();
        const project = todoList.getProject(projectName);
        if(project){
            project.updateTask(taskTitle, newTaskTitle);
        }
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskTitle){
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskTitle);
        Storage.saveTodoList(todoList);
    }
}