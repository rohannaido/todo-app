export default class Task{
    constructor(title, description, dueDate = null, priority = "zxcv"){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle(){
        return this.title;       
    }

    getDescription(){
        return this.description;
    }

    setDescription(newDescription){
        this.description = newDescription;
    }
    setTitle(newTitle){
        if(newTitle){
            this.title = newTitle;
        }
    }
}
