import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './modules/app';
import createNav from './modules/nav';
import { createSidebar } from './modules/sidebar';
import { createViewContainer, removeViewContainer } from './modules/viewContainer';
import events from './modules/events';

const newProject = new Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());
console.log(todayView.getTasks());

createNav();
createSidebar();
createViewContainer(inboxView);




