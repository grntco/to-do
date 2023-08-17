// bridge between DOM and app
import { d } from "../mainContainer";
import { Project, Task, allProjects, allTasks } from "../app";
import { removeNewTaskForm } from "./newTaskForm";
import removeModal from "./removeModal";
import refreshContent from "../refreshContent";
import { saveToLocalStorage } from "../localStorage";

export function createTask() {
    const title = d.getElementById('task-name-input').value;
    const description = d.getElementById('task-description-input').textContent;
    const project = d.getElementById('task-project-input').value;
    const priority = d.getElementById('task-priority-input').value;
    const dueDate = d.getElementById('task-due-date-input').value;

    if (title) {
        const newTask = new Task(title, description, project, priority, dueDate);
        newTask.add();
        saveToLocalStorage(allTasks);
    }

    // close the form?
    refreshContent();
}

export function editTask() {
    console.log("what's up?");
    removeModal();
}

export function createProject() {
    const title = d.getElementById('project-name-input').value;
    const description = d.getElementById('project-description-input').textContent;

    if (title) {
        const newProject = new Project(title, description);
        newProject.add();
        saveToLocalStorage(allProjects);
    }
    removeModal();
    refreshContent();
}