import { getFromLocalStorage } from "./localStorage";
import startOfToday from "date-fns/startOfToday";

let allTasks = [];
allTasks = getFromLocalStorage(allTasks) || [];

class Task {
    constructor(_title, _description, _project, _priority, _dueDate) {
        this.title = _title;
        this.description = _description;
        this.project = _project;
        this.priority = _priority;
        this.dueDate = _dueDate ? new Date(_dueDate.split('-')) : new Date(startOfToday());
    }

    add() {
        allTasks.push(this);
    };

    delete() {
        let index = allTasks.findIndex((task) => task === this);
        allTasks.splice(index, 1);
    };

    update(newTitle, newDescription, newProject, newPriority, newDueDate) {
        this.title = newTitle;
        this.description = newDescription;
        this.project = newProject;
        this.priority = newPriority;
        this.dueDate = newDueDate ? new Date(newDueDate.split('-')) : new Date(startOfToday());
    };
}

export { Task, allTasks };