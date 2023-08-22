import './styles.css';
import { inboxView } from './app/project';
import createNav from './ui/nav';
import { createSidebar } from './ui/sidebar';
import { createViewContainer } from './ui/viewContainer';
import events from './app/events';

import { allTasks, newTask } from './app/task';


// console.log(allTasks);

// allTasks[0].edit('updated Title', 'updated description', 'Gym', 'High', '2023-7-6');

// console.log(allTasks);

const init = (function() {
    createNav();
    createSidebar();
    createViewContainer(inboxView);
})();
