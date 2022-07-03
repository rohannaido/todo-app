import Project from "./Project";
import Task from "./task";
import TodoList from "./TodoList";

const createTodoList = () =>{
    const todoList = document.createElement("div");
    todoList.classList.add("todolist-div");
    
    todoList.appendChild(createSidebar());
    todoList.appendChild(createTaskPanel());

    return todoList;
}

const updateSidebar = () => {
    const sidebar = document.querySelector(".sidebar-div div");
    sidebar.innerText = "";

    sidebar.appendChild(createProjectList());

}

const createSidebar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar-div");

    const heading = document.createElement("h2");
    heading.innerText = "Projects";
    heading.classList.add("sidebar-h2");

    sidebar.appendChild(heading);

    const inputName = document.createElement("input");
    const inputButton = document.createElement("button");

    inputButton.innerText = "Add";
    inputButton.addEventListener("click", addProject);

    sidebar.appendChild(inputName);
    sidebar.appendChild(inputButton);

    sidebar.appendChild(createProjectList());

    return sidebar;
}

// TEST SAMPLE DATA

const myTodoList = new TodoList();

for(let j = 1; j < 6; j++){
    const project1 = new Project("One Project " + j);
    for(let i = 0; i < 10; i++){
        project1.addTask(new Task("taskasdf " + j + " -- "+ i, "dooo iiitt"))
    }

    myTodoList.addProject(project1);
}

const testProject = new Project("asdfasdf");
testProject.addTask(new Task("asdfzvxc", "asdfzxvasdf"));

myTodoList.addProject(testProject);

const createProjectList = () => {
    
    const projectListDiv = document.createElement("div");
    const projectList = document.createElement("ol");

    let listItem = document.createElement("li");

    for(const project of myTodoList.getProjects()){
        listItem = document.createElement("li");

        listItem.innerText = project.getName();
        listItem.addEventListener("click", () => showProjectTasks(project));

        projectList.appendChild(listItem);
    }

    projectListDiv.appendChild(projectList);

    return projectListDiv;
}

const addProject = (e) => {
    const nameInput = document.querySelector(".sidebar-div input");
    myTodoList.addProject(new Project(nameInput.value));
    updateSidebar();
}

const showProjectTasks = (project) => {
    const taskListContainer = document.querySelector(".task-list-div div");
    taskListContainer.innerText = "";

    taskListContainer.appendChild(createTaskList(project));
    myTodoList.setActiveProject(project);

}

const createTaskPanel = () => {
    const taskList = document.createElement("div");
    const taskListDiv = document.createElement("div");
    taskList.classList.add("task-list-div");
    
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.innerText = "Add"
    button.addEventListener("click", () => addTask());

    taskList.appendChild(input);
    taskList.appendChild(button);

    const defaultTaskList = createTaskList(myTodoList.getDefaultProject());
    taskListDiv.appendChild(defaultTaskList);
    taskList.appendChild(taskListDiv);

    return taskList;
}

const addTask = () => {
    const input = document.querySelector(".task-list-div input");
    console.log(input.value);
    const newTask = new Task(input.value, "");
    console.log(myTodoList.getActiveProject());
    myTodoList.getActiveProject().addTask(newTask);
    updateTaskList();

}

const createTaskList = (project) => {
    const taskList = document.createElement("ol");

    for(const task of project.getTasks()){
        const listItem = document.createElement("li");
        listItem.innerText = task.getTitle();
        taskList.appendChild(listItem);
    }

    return taskList;
}

const updateTaskList = () => {
    const taskList = document.querySelector(".task-list-div div");
    taskList.innerText = "";

    taskList.appendChild(createTaskList(myTodoList.getActiveProject()));
}


export {createTodoList};