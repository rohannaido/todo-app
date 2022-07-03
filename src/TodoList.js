export default class TodoList{
    constructor(){
        this.projects = [];
    }
    getDefaultProject(){
        if (this.projects[0]){
            return this.projects[0]
        }
    }
    getProjects() {
        return this.projects;
    }
    addProject(project){
        
        if(this.projects.find((projectItem) => (projectItem.getName() === project.getName()))){
            return   
        }
        this.projects.push(project);
    }
}