import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView, todayView } from './modules/app';
import createSidebar from './modules/sidebar';
import { createNav, createViewContainer } from './modules/mainView';
import events from './modules/events';

const newProject = new Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());
console.log(todayView.getTasks());

createNav();
createSidebar();
createViewContainer(inboxView);




