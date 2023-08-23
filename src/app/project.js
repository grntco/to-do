import { isToday, isAfter, isBefore, addDays } from "date-fns";
import { allTasks } from "./task";
import { getFromLocalStorage } from "./localStorage";

class TasksView {
    constructor(_title) {
        this.title = _title;
    }
}

const inboxView = new TasksView('Inbox');
inboxView.getTasks = function() {
    return allTasks.filter((task) => task.project === '');
}

const todayView = new TasksView('Today');
todayView.getTasks = function() {
    return allTasks.filter((task) => isToday(task.dueDate));
}

const weekView = new TasksView('Week');
weekView.getTasks = function() {
    return allTasks.filter((task) => (isToday(task.dueDate) || isAfter(task.dueDate, new Date())) && isBefore(task.dueDate, addDays(new Date(), 6)));
}

let allProjects = [];
allProjects = getFromLocalStorage(allProjects) || [];

class Project extends TasksView {
    constructor(_title, _description) {
        super(_title);
        this.description = _description
    }

    add() {
        allProjects.push(this);
    }

    delete() {
        let index = allProjects.findIndex((project) => project === this);
        allProjects.splice(index, 1);
    }

    getTasks() {
        return allTasks.filter(task => task.project === this.title);
    }
}

export { inboxView, todayView, weekView, allProjects, Project }