import Project from "./Project";
import Task from "./Task";
import { createTodoList } from "./UI";

const createHeader = () => {
    const header = document.createElement("header");
    const heading = document.createElement("h1");
    heading.innerText = "ToDo App"

    header.appendChild(heading);
    return header;

}

const getTodo = () => {
    const task1 = new Task("TeST", "DECSSDFD");
    console.log(task1);
    task1.getTitle();
    const project1 = new Project("TESTProject");
    console.log(project1.getName());
    project1.addTask(task1)
    console.log(project1.getAllTasks());
}

const createMain = () => {
    const main = document.createElement("main");
    main.appendChild(createTodoList());
    return main;
}

const createFooter = () => {
    const footer = document.createElement("footer");
    const githubIcon = document.createElement("i");
    const githubLink = document.createElement("a");

    githubIcon.classList.add("fa-brands");
    githubIcon.classList.add("fa-github")

    footer.innerText = "Copyright © 2022 rohannaido ";
    githubLink.href = "https://github.com/rohannaido";
    githubLink.target = "_blank"
    githubLink.appendChild(githubIcon);
    footer.appendChild(githubLink);
    
    return footer;
}

const initializeWebpage = () => {
    const content = document.querySelector("div#content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default initializeWebpage;