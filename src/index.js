import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView } from './modules/app';
import createSidebar from './modules/sidebar';
import { createNav, createViewContainer } from './modules/mainView';
import changeTheme from './modules/changeTheme';

const newProject = new Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());
console.log(inboxView.getTasks());

createNav();
createSidebar();
createViewContainer(inboxView);




