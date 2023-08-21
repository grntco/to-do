import format from "date-fns/format";
import parseISO from 'date-fns/parseISO'
import { d, mainContainer } from "./mainContainer";

export function createViewContainer(view) {
    const viewContainer = mainContainer.appendChild(d.createElement('div'));
    viewContainer.classList.add('view-container');

    const viewName = viewContainer.appendChild(d.createElement('h2'));
    viewName.id = 'view-name';
    viewName.textContent = view.title;

    const viewDescription = viewContainer.appendChild(d.createElement('p'));
    viewDescription.textContent = view.description;

    const createTasksContainer = (function() {
        const tasksContainer = viewContainer.appendChild(d.createElement('div'));
        tasksContainer.classList.add('tasks-container');

        const createTasks = (function() {
            for (let i = 0; i < view.getTasks().length; i++) {
                let taskObj = view.getTasks()[i];

                const taskCard = tasksContainer.appendChild(d.createElement('div'));
                taskCard.classList.add('task');

                const completeBtn = taskCard.appendChild(d.createElement('button'));
                completeBtn.classList.add('task-complete-btn');

                const createPrimaryInfo = (function() {
                    const primaryInfo = taskCard.appendChild(d.createElement('div'));
                    primaryInfo.classList.add('primary-info');

                    const name = primaryInfo.appendChild(d.createElement('div'));
                    name.classList.add('name');
                    name.textContent = taskObj.title;

                    const description = primaryInfo.appendChild(d.createElement('div'));
                    description.classList.add('description');
                    description.textContent = taskObj.description;
                })();

                const createMetaContainer = (function() {
                    const metaContainer = taskCard.appendChild(d.createElement('ul'));
                    metaContainer.classList.add('meta-container');

                    if (taskObj.priority) {
                        const priorityTag = metaContainer.appendChild(d.createElement('li'));
                        priorityTag.classList.add('meta-tag');
                        priorityTag.textContent = taskObj.priority;
                        priorityTag.classList.add(`${priorityTag.textContent.toLowerCase()}-priority`)
                    }

                    if (taskObj.project) {
                        const projectTag = metaContainer.appendChild(d.createElement('li'));
                        projectTag.classList.add('meta-tag');
                        projectTag.textContent = taskObj.project;
                    }

                    const dueDateTag = metaContainer.appendChild(d.createElement('li'));
                    dueDateTag.classList.add('meta-tag');
                    dueDateTag.textContent = format(taskObj.dueDate, 'PP');
                })();
            } 
        })();
    })();

    const addTaskBtn = viewContainer.appendChild(d.createElement('button'));
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Add Task`;

    return viewContainer;
}

export function getViewContainer() {
    return d.querySelector('.view-container');
}

export function removeViewContainer() {
    mainContainer.removeChild(getViewContainer());
}