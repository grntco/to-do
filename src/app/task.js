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
}

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

export { Task, allTasks };