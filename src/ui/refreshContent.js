import { createSidebar, toggleSidebar } from "./sidebar"
import { createViewContainer } from "./viewContainer";
import { d, mainContainer } from "./mainContainer";
import { inboxView, todayView, weekView, allProjects } from "../app/app";

export default function refreshContent() {
    const getSidebarStatus = function() {
        if (d.querySelector('.sidebar').classList.contains('collapsed')) {
            return 'collapsed';
        }
    };
    const previousSidebarStatus = getSidebarStatus();

    const getCurrentView = function() {
        const viewName = d.getElementById('view-name').textContent;

        switch (viewName) {
            case 'Inbox':
                return inboxView;
                break;
            case 'Today':
                return todayView;
                break;
            case 'Week':
                return weekView;
                break;
            default:
                return allProjects.find((project) => project.title === viewName);
        }
    }
    const currentView = getCurrentView();

    mainContainer.innerHTML = '';

    createSidebar();

    if (previousSidebarStatus === 'collapsed') {
        toggleSidebar();
    }

    createViewContainer(currentView);
}