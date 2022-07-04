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
    
    getTasks(){
        return this.tasks;
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
                taskItem.updateTitle(newTaskTitle);
            }
        })
    }

    deleteTask(taskTitle){
        this.tasks = this.tasks.filter((taskItem) => taskTitle !== taskItem.getTitle());

    }


}