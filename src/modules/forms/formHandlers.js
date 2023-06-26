// bridge between DOM and app
import { d } from "../mainContainer";
import { Project, Task } from "../app";
import { removeNewTaskForm } from "./newTaskForm";

export function createTask() {
    const title = d.getElementById('task-name-input').value;
    const description = d.getElementById('task-description-input').textContent;
    const project = d.getElementById('task-project-input').value;
    const priority = d.getElementById('task-priority-input').value;
    const dueDate = d.getElementById('task-due-date-input').value;

    const newTask = new Task(title, description, project, priority, dueDate);
    newTask.add()
    // refresh content 
    // may not need to remove the form if you just refresh everything
    removeNewTaskForm();
}









export function editTask() {

}

export function createProject() {

}