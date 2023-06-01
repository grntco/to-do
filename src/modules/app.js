const allTasks = [];

class Task {
    constructor(_title, _description, _dueDate, _priority, _project) {
        this.title = _title;
        this.description = _description;
        this.dueDate = _dueDate;
        this.priority = _priority;
        this.project = _project;
    }

    add() {
        allTasks.push(this);
    };

    delete() {
        let index = allTasks.findIndex((task) => task === this);
        allTasks.splice(index, 1);
    };
}

// This is needed for displaying project names on DOM, otherwise it has no use
const allProjects = [];

class Project {
    constructor(_title, _description) {
        this.title = _title;
        this.description = _description;
    }

    add() {
        allProjects.push(this);
    }

    delete() {
        let index = allProjects.findIndex((project) => project === this);
        allProjects.splice(index, 1);
    }
}

// const newTask = new Task('Write book', 'At least 50 pages', 'June 1, 2023', 'High', 'Gym');
// newTask.add();
// const newTask2 = new Task('Write blog', 'At least 50 words', 'June 3, 2023', 'Medium', 'Work');
// newTask2.add();
// const newTask3 = new Task('Do pullups', 'Aim for 10', 'June 5, 2023', 'Low');
// newTask3.add();

const inbox = allTasks.filter((task) => task.project === undefined);

export { allTasks, Task, allProjects, Project, inbox }