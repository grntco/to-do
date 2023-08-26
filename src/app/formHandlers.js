import { d } from "../ui/mainContainer";
import { Project, allProjects } from "./project";
import { Task, allTasks } from "./task";
import refreshContent from "../ui/refreshContent";
import { saveToLocalStorage } from "./localStorage";

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

    refreshContent();
}

let taskIndex = -1;

export function updateTaskIndex(taskObj) {
    taskIndex = allTasks.indexOf(taskObj);
};

export function editTask() {
    if (d.getElementById('task-due-date-input-btn')) switchToDateInput();

    const title = d.getElementById('task-name-input').value;
    const description = d.getElementById('task-description-input').textContent;
    const project = d.getElementById('task-project-input').value;
    const priority = d.getElementById('task-priority-input').value;
    const dueDate = d.getElementById('task-due-date-input').value;


    allTasks[taskIndex].update(title, description, project, priority, dueDate);
    if (title) saveToLocalStorage(allTasks);

    refreshContent();
};

export function switchToDateInput() {
    d.getElementById('task-due-date-input-btn').remove();
    const dateInput = d.querySelector('.meta-input-container').appendChild(d.createElement('input'));
    dateInput.type = 'date';
    dateInput.id = 'task-due-date-input';
}

export function createProject() {
    const title = d.getElementById('project-name-input').value;
    const description = d.getElementById('project-description-input').textContent;

    if (title) {
        const newProject = new Project(title, description);
        newProject.add();
        saveToLocalStorage(allProjects);
    }

    refreshContent();
};

export function deleteProject() {
    const projectName = d.getElementById('view-name').textContent;
    const projectObj = allProjects.find((project) => project.title === projectName);

    allTasks.forEach((task) => {
        if (task.project === projectObj.title) {
            task.project = '';
        }
    });
    saveToLocalStorage(allTasks);

    projectObj.delete();
    saveToLocalStorage(allProjects);

    refreshContent();
};