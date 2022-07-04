import Project from "./Project";
import Task from "./Task";
import TodoList from "./TodoList";
import Storage from "./Storage";
// TEST SAMPLE DATA //

// const myTodoList = new TodoList();

// for(let j = 1; j < 6; j++){
//     const project1 = new Project("One Project " + j);
//     for(let i = 0; i < 20; i++){
//         project1.addTask(new Task("taskasdf " + j + " -- "+ i, "dooo iiitt"))
//     }
    
//     myTodoList.addProject(project1);
// }

const myTodoList = Storage.getTodoList();
// Storage.saveTodoList(myTodoList);

// console.log(myTodoList);

// TODO LIST //

const createTodoList = () =>{
    const todoList = document.createElement("div");
    todoList.classList.add("todolist-div");
    
    todoList.appendChild(createSidebar());
    todoList.appendChild(createTaskPanel());

    return todoList;
}

// PROJECTS //


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

const updateSidebar = () => {
    const sidebar = document.querySelector(".sidebar-div div");
    sidebar.innerText = "";

    sidebar.appendChild(createProjectList());

}



const createProjectList = () => {
    
    const projectListDiv = document.createElement("div");
    const projectList = document.createElement("ol");

    let listItem = document.createElement("li");

    // console.log(Storage.getTodoList());

    for(const project of Storage.getTodoList().getProjects()){
        listItem = document.createElement("li");

        listItem.innerText = project.getName();
        listItem.addEventListener("click", () => showProjectTasks(project.getName()));

        projectList.appendChild(listItem);
    }

    projectListDiv.appendChild(projectList);

    return projectListDiv;
}

const addProject = (e) => {
    const nameInput = document.querySelector(".sidebar-div input");
    // myTodoList.addProject(new Project(nameInput.value));
    Storage.addProject(new Project(nameInput.value));
    // Storage.saveTodoList(myTodoList);
    nameInput.value = "";
    updateSidebar();
}

const showProjectTasks = (projectName) => {
    const taskListContainer = document.querySelector(".task-list-div div");
    taskListContainer.innerText = "";

    taskListContainer.appendChild(createTaskList(projectName));
    Storage.setActive(projectName);

}

// TASKS

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

    const defaultTaskList = createTaskList("default");

    taskListDiv.appendChild(defaultTaskList);
    taskList.appendChild(taskListDiv);
    
    return taskList;
}

const createTaskList = (projectName) => {
    const taskList = document.createElement("ol");

    console.log(Storage.getTodoList().getProject(projectName));
    for(const task of Storage.getTodoList().getProject(projectName).getTasks()){
        const listItem = document.createElement("li");
        listItem.innerText = task.getTitle();

        const description = document.createElement("span");
        description.innerText = task.getDescription();
        const btnContainer = document.createElement("div");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        btnContainer.classList.add("task-btn-div")
        editBtn.innerText = "Edit"
        deleteBtn.innerText = "Del";
        
        editBtn.addEventListener("click", () => editTask(task));
        deleteBtn.addEventListener("click", () => deleteTask(task.getTitle()));
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        listItem.appendChild(description);
        listItem.appendChild(btnContainer);
        taskList.appendChild(listItem);
    }

    return taskList;
}

const addTask = () => {
    const input = document.querySelector(".task-list-div input");
    const newTask = new Task(input.value, "");

    console.log(Storage.getTodoList().getActiveProject())
    Storage.addTask(Storage.getTodoList().getActiveProject(), newTask);

    // myTodoList.getActiveProject().addTask(newTask);
    // Storage.saveTodoList(myTodoList);
    input.value = "";
    refreshTaskList();
}

const refreshTaskList = () => {
    const taskList = document.querySelector(".task-list-div div");
    taskList.innerText = "";

    taskList.appendChild(createTaskList(Storage.getTodoList().getActiveProject()));
}

const editTask = (task) => {
    showEditPanel(task.getTitle());
}

const createEditPanel = (content) => {
    const editPanel = document.createElement("div");
    editPanel.classList.add("edit-panel-div");

    editPanel.appendChild(createEditBox(content));
    return editPanel;
}

const createEditBox = (content) => {
    const editBox = document.createElement("div");
    editBox.classList.add("edit-box-div");
    const input = document.createElement("input");
    const updateBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    input.value = content;
    updateBtn.innerText = "Update";
    closeBtn.innerText = "Close";
    
    updateBtn.addEventListener("click", () => updateTask(content, input.value))
    closeBtn.addEventListener("click", () => hideEditPanel());

    editBox.appendChild(input);
    editBox.appendChild(updateBtn);
    editBox.appendChild(closeBtn);
    return editBox;
}

const updateTask = (oldTitle, newTitle) => {
    // console.log(myTodoList.getActiveProject())
    myTodoList.getActiveProject().updateTask(oldTitle, newTitle);
    hideEditPanel();
    refreshTaskList();
}

const showEditPanel = (content) => {
    const main = document.querySelector(".todolist-div");
    main.appendChild(createEditPanel(content));
}

const hideEditPanel = () => {
    const editPanel = document.querySelector(".edit-panel-div");
    editPanel.remove();
}

const deleteTask = (taskTitle) => {
    console.log(myTodoList.getActiveProject())
    Storage.deleteTask(Storage.getTodoList().getActiveProject(), taskTitle);
    refreshTaskList();
}

export { createTodoList };