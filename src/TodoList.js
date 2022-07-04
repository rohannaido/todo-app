import Project from "./Project";

export default class TodoList{
    constructor(){
        this.projects = [new Project("default")];
        this.activeProject = "default";
    }

    getDefaultProject(){
        return this.projects.find((project) => (project.getName() === "default"));
    }
    getProjects() {
        return this.projects;
    }
    setProjects(newProjects) {
        this.projects = newProjects;
    }

    getProject(projectName){
        const project = this.projects.find((project) => (projectName === project.getName()));
        console.log("projectName  ddd  " + projectName);
        if(project){
            return project;
        }
    }

    addProject(project){
        if(this.projects.find((projectItem) => (projectItem.getName() === project.getName()))){
            return
        }
        this.projects.push(project);
    }
    setActiveProject(projectName){
        console.log(projectName);
        this.activeProject = projectName;
    }
    getActiveProject(){
        return this.activeProject;
    }

}