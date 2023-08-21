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

    // delete() {
    //     let index = allProjects.findIndex((project) => project === this);
    //     allProjects.splice(index, 1);
    // }

    getTasks() {
        return allTasks.filter(task => task.project === this.title);
    }
}

// const newProject = new Project('Gym', 'Get swole');
// newProject.add();
// const newProject2 = new Project('Work', 'Things to fill 8 hours with');
// newProject2.add();


// const newTask = new Task('Write book', 'At least 50 pages', 'Gym', 'High', '2023-7-6');
// newTask.add();
// const newTask2 = new Task('Write blog', 'At least 50 words', '', 'Medium', '2023-8-17');
// newTask2.add();
// const newTask3 = new Task('Do pullups', 'Aim for 10', 'Gym', 'Medium', '2023-6-20');
// newTask3.add();
// const newTask4 = new Task('Do the thing', 'this task is due tomorrow with no project', undefined, 'Low', '2023-6-21');
// newTask4.add();
// const newTask5 = new Task('Do the other thing', 'why do we do it', undefined, 'Medium', '2023-6-27');
// newTask5.add();

export { inboxView, todayView, weekView, allProjects, Project }