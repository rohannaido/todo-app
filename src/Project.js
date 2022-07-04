import Task from "./Task";

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
    
    getTasks(){
        return this.tasks;
    }

    setTasks(newTasks){
        this.tasks = newTasks;
    }

    addTask(task){
        if((task.getTitle() == "") || (this.tasks.find((taskItem) => taskItem.getTitle() === task.getTitle()))){
            return
        }
        this.tasks.push(task);
    }

    updateTask(oldtaskTitle, newTaskTitle){
        this.tasks.map((taskItem) => {
            if(taskItem.title === oldtaskTitle){
                console.log(taskItem);
                taskItem.updateTitle(newTaskTitle);
            }
        })
    }

    deleteTask(taskTitle){
        this.tasks = this.tasks.filter((taskItem) => taskTitle !== taskItem.getTitle());

    }
}