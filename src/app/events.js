import { d } from "../ui/mainContainer";
import changeTheme from "./changeTheme";
import { sidebarCollapse, toggleSidebar } from "../ui/sidebar";
import { createViewContainer, removeViewContainer } from "../ui/viewContainer";
import { createNewTaskForm } from "../ui/forms/newTaskForm";
import createEditTaskModal from "../ui/forms/editTaskModal";
import createNewProjectModal from "../ui/forms/newProjectModal";
import { createTask, createProject, editTask, updateTaskIndex } from "./formHandlers";
import { allProjects, inboxView, todayView, weekView } from './project';
import { allTasks } from "./task";
import { completeTask } from "./completeTask";
import refreshContent from "../ui/refreshContent";

export const events = (function() {
    d.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('sidebar-toggle-btn')) {
            toggleSidebar();
        }

        if (target.classList.contains('theme-toggle-btn')) {
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
            const projectObj = allProjects.find((project) => project.title === projectName);
            removeViewContainer();
            createViewContainer(projectObj);
        }

        if (target.id === 'add-task-btn') {
            createNewTaskForm()
        }

        if (target.id === 'create-task-btn') {
            e.preventDefault();
            createTask();
        }

        if (target.id === 'add-project-btn') {
            createNewProjectModal();
        }

        if (target.id === 'create-project-btn') {
            e.preventDefault();
            createProject();
        }

        if (target.classList.contains('cancel-btn')) {
            e.preventDefault();
            refreshContent();
        }

        if (target.classList.contains('task')) {
            const taskCard = target;
            const taskObj = allTasks.find((task) => task.title === taskCard.querySelector('.name').textContent);
            updateTaskIndex(taskObj);
            createEditTaskModal(taskObj);
        }

        if (target.id === 'done-edit-task-btn') {
            e.preventDefault()
            editTask();
        }

        if (target.classList.contains('task-complete-btn')) {
            completeTask(target.parentElement);
        }
    });
})();

const mobileEvents = (function() {
    window.addEventListener('resize', function() {
        if (window.innerWidth < 767) {
            sidebarCollapse();
        };
    })
    window.addEventListener('load', function() {
        if (window.innerWidth < 767) {
            sidebarCollapse();
        };
    });
})();