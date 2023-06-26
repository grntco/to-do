import { d } from "./mainContainer";
import changeTheme from "./changeTheme";
import { toggleSidebar } from "./sidebar";
import { createViewContainer, removeViewContainer } from "./viewContainer";
import { createNewTaskForm, removeNewTaskForm } from "./forms/newTaskForm";
import createEditTaskModal from "./forms/editTaskModal";
import createNewProjectModal from "./forms/newProjectModal";
import removeModal from "./forms/removeModal";
import { createTask, createProject } from "./forms/formHandlers";

import { allTasks, Task, allProjects, Project, inboxView, todayView, weekView } from './app';

const events = (function() {
    d.addEventListener('click', function(e) {
        // Prevent default here prevents the cal form selector on the input[type='text'];
        const target = e.target;

        if (target.classList.contains('sidebar-toggle-btn')) {
            toggleSidebar();
        }
        // could do one init/refresh here, instead of individuall in the functions, just need to choose which to do them on and group together
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

        if (target.classList.contains('cancel-modal-btn')) {
            e.preventDefault();
            removeModal();
        }

        if (target.classList.contains('cancel-form-btn')) {
            e.preventDefault();
            removeNewTaskForm();
        }

        if (target.classList.contains('task')) {
            const taskCard = target;
            const taskObj = allTasks.find((task) => task.title === taskCard.querySelector('.name').textContent);
            createEditTaskModal(taskObj);
        }
    });
})();

export default events