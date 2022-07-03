export default class TodoList{
    constructor(){
        this.projects = [];
        this.activeProject = this.getDefaultProject();
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
    setActiveProject(project){
        this.activeProject = project;
    }
    getActiveProject(){
        return this.activeProject;
    }
}