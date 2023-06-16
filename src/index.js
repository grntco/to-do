import './styles.css';
import { allTasks, Task, allProjects, Project, inbox } from './modules/app';
import createSidebar from './modules/sidebar';
import { createViewContainer } from './modules/mainView';


const newProject = new Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());

createSidebar();
createViewContainer(newProject);



console.log(allTasks);
console.log(inbox);

console.log(newProject.getTasks());
console.log(inbox);




