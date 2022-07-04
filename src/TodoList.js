import Project from "./Project";

export default class TodoList{
    constructor(){
        this.projects = [new Project("default")];
        this.activeProject = this.getDefaultProject();
    }

    getDefaultProject(){
        if (this.projects[0]){
            return this.projects[0];
        }
        return false;
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