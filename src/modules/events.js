import { d } from "./mainContainer";
import changeTheme from "./changeTheme";
import { toggleSidebar } from "./sidebar";
import { createViewContainer, removeViewContainer } from "./viewContainer";
import { createNewProjectModal } from "./forms";
import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './app';

const events = (function() {
    d.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('sidebar-toggle-btn') || target.classList.contains('fa-bars')) {
            toggleSidebar();
        }

        if (target.classList.contains('theme-toggle-btn') || target.classList.contains('fa-moon')) {
            changeTheme();
        }

        if (target.id === 'inbox-view-btn') {
            removeViewContainer();
            createViewContainer(inboxView)
        }

        if (target.id === 'today-view-btn') {
            removeViewContainer();
            createViewContainer(todayView);
        }

        if (target.id === 'week-view-btn') {
            removeViewContainer();
            createViewContainer(weekView);
        }

        if (target.classList.contains('project-sb-btn')) {
            const projectName = target.textContent.replace(/\d/g, '');
            const projectObj = allProjects.find((project) => project.title = projectName);
            removeViewContainer();
            createViewContainer(projectObj);
        }

        if (target.id === 'add-project-btn') {
            createNewProjectModal();
        }
    });
})();

export default events