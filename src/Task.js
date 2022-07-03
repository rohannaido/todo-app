export default class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
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
}
