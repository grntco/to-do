import './styles.css';
import { allTasks, Task, allProjects, Project, inbox } from './modules/app';

console.log(allTasks);
console.log(inbox);


const newProject = new Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());
console.log(inbox);
// newTask2.delete();
// console.log(allTasks);

// const newProject = new Project('Gym', 'Time to get fit');
// newProject.add();
// const newProject2 = new Project('Work', 'Things for the slog');
// newProject2.add();
// console.log(newProject);
// console.log(allProjects);

// newProject.delete();
// console.log(allProjects);



