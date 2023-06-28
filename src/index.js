import './styles.css';
import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './modules/app';
import createNav from './modules/nav';
import { createSidebar } from './modules/sidebar';
import { createViewContainer, removeViewContainer } from './modules/viewContainer';
import events from './modules/events';
import { saveToLocalStorage, getFromLocalStorage } from './modules/localStorage';

console.log(allTasks)
saveToLocalStorage(allTasks);
getFromLocalStorage(allTasks);

// console.log(allTasks);
// console.log(JSON.parse(localStorage.getItem('allTasks')));

// console.log(localStorage.getItem('allTasks'))

// console.log(todayView.getTasks());
// console.log(allTasks);

createNav();
createSidebar();
createViewContainer(inboxView);




