import { isToday, isAfter, isEqual, isBefore, addDays } from "date-fns";

const allTasks = [];

class Task {
    constructor(_title, _description, _dueDate, _priority, _project) {
        this.title = _title;
        this.description = _description;
        this.priority = _priority;
        this.project = _project;
        this.dueDate = new Date(_dueDate.split('-'));
        this.completed = false;
    }

    add() {
        allTasks.push(this);
    };

    delete() {
        let index = allTasks.findIndex((task) => task === this);
        allTasks.splice(index, 1);
    };

    markComplete() {
        this.completed = true;
    }
}

class TasksView {
    constructor(_title) {
        this.title = _title;
    }
}

const inboxView = new TasksView('Inbox');
inboxView.getTasks = function() {
    return allTasks.filter((task) => task.project === undefined);
}

const todayView = new TasksView('Today');
todayView.getTasks = function() {
    return allTasks.filter((task) => isToday(task.dueDate))
}
// Something like return  allTasks.filter((task) => task.dueDate.isNow())


const weekView = new TasksView('Week');
weekView.getTasks = function() {
    return allTasks.filter((task) => (isToday(task.dueDate) || isAfter(task.dueDate, new Date())) && isBefore(task.dueDate, addDays(new Date(), 6)));
}


// This is needed for displaying project names on DOM, otherwise it has no use
// May be a better way to do this through localStorage?
const allProjects = [];

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

const newProject = new Project('Gym', 'Get swole');
newProject.add();
const newProject2 = new Project('Work', 'Things to fill 8 hours with');
newProject2.add();


const newTask = new Task('Write book', 'At least 50 pages', '2023-6-1', 'High', 'Gym');
newTask.add();
const newTask2 = new Task('Write blog', 'At least 50 words', '2023-6-25', 'Medium', 'Work');
newTask2.add();
const newTask3 = new Task('Do pullups', 'Aim for 10', '2023-6-20', 'Medium', 'Gym');
newTask3.add();
const newTask4 = new Task('Do the thing', 'this task is due tomorrow with no project', '2023-6-21', 'Low');
newTask4.add();
const newTask5 = new Task('Do the other thing', 'why do we do it', '2023-6-27', 'Medium');
newTask5.add();


export { allTasks, Task, inboxView, todayView, weekView, allProjects, Project, }