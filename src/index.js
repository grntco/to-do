import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './modules/app';
import createNav from './modules/nav';
import { createSidebar } from './modules/sidebar';
import { createViewContainer, removeViewContainer } from './modules/viewContainer';
import events from './modules/events';
import { saveToLocalStorage, getFromLocalStorage } from './modules/localStorage';

saveToLocalStorage(allProjects);
console.log(allTasks);

getFromLocalStorage(allTasks);

createNav();
createSidebar();
createViewContainer(getFromLocalStorage(allProjects)[0]);