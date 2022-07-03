import Task from "./task";

export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    addTask(task){
        if(this.tasks.find((taskItem) => taskItem.getTitle() === task.getTitle())){
            return
        }
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    deleteTask(taskTitle){
        this.tasks = this.tasks.filter((taskItem) => taskTitle !== taskItem.getTitle());

    }

    
}