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
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

}