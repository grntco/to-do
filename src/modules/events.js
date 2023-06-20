import { createViewContainer, d } from "./mainView";
import changeTheme from "./changeTheme";
import createSidebar from "./sidebar";
import { allTasks, Task, allProjects, Project, inboxView, todayView } from './app';
// import { createViewContainer } from "./mainView";
// import { inboxView } from "./app";

const events = (function() {
    d.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('fa-moon')) {
            changeTheme();
        }

        // if (target.id === ('inbox-view-btn')) {
        //     createViewContainer(inboxView)
        //     console.log('hello')
        // }

        // if (target.id === ('today-view-btn')) {
        //     createViewContainer(todayView)
        //     console.log('hello')
        // }



        // if (target.classList.contains('fa-bars')) {
        //     createSidebar().toggle();
        // }


    })
})();

export default events