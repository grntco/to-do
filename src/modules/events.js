import { d } from "./mainContainer";
import changeTheme from "./changeTheme";
import { createSidebar, toggleSidebar } from "./sidebar";
import { createViewContainer, removeViewContainer } from "./viewContainer";
import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './app';

const events = (function() {
    d.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('fa-moon')) {
            changeTheme();
        }

        if (target.id === ('inbox-view-btn')) {
            removeViewContainer();
            createViewContainer(inboxView)
        }

        if (target.id === ('today-view-btn')) {
            removeViewContainer();
            createViewContainer(todayView);
        }

        if (target.id === ('week-view-btn')) {
            removeViewContainer();
            createViewContainer(weekView);
        }

        // if (target.cl)

        if (target.classList.contains('fa-bars')) {
            toggleSidebar();
        }


    })
})();

export default events