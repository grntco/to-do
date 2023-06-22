import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './modules/app';
import createNav from './modules/nav';
import { createSidebar } from './modules/sidebar';
import { createViewContainer, removeViewContainer } from './modules/viewContainer';
import events from './modules/events';

console.log(todayView.getTasks());
console.log(allProjects);

createNav();
createSidebar();
createViewContainer(inboxView);




