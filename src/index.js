import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView } from './modules/app';
import createSidebar from './modules/sidebar';
import { createNav, createViewContainer } from './modules/mainView';


const newProject = new Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());


createNav();
createSidebar();
createViewContainer(newProject);



console.log(allTasks);
console.log(inboxView);

console.log(newProject.getTasks());
console.log(inboxView);




