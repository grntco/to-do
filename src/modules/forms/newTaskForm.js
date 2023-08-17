import { allProjects } from "../app";
import { d } from "../mainContainer";
import { getViewContainer } from "../viewContainer";

export function createNewTaskForm() {
    const addTaskBtn = d.getElementById('add-task-btn');
    addTaskBtn.disabled = true;

    const newTaskForm = getViewContainer().insertBefore(d.createElement('div'), d.getElementById('add-task-btn'));
    newTaskForm.classList.add('new-task-form-container');

    const createForm = (function() {
        const form = newTaskForm.appendChild(d.createElement('form'));

        const createMainInfoFieldset = (function() {
            const fieldset = form.appendChild(d.createElement('fieldset'));

            const titleInput = fieldset.appendChild(d.createElement('input'));
            titleInput.type = 'text';
            titleInput.name = 'task-name-input';
            // Really don't think I need names on inputs. Is this just if you have labels?
            titleInput.id = 'task-name-input';
            titleInput.placeholder = 'Task name';
            titleInput.autocomplete = 'off';

            const descriptionInput = fieldset.appendChild(d.createElement('div'));
            descriptionInput.id = 'task-description-input'
            descriptionInput.innerHTML = `<span class="textarea" role="textbox" contenteditable></span>`;
        })();

        const createMetaInputContainer = (function() {
            const metaInputContainer = form.appendChild(d.createElement('fieldset'));
            metaInputContainer.classList.add('meta-input-container');

            const createProjectInput = (function() {
                const projectInput = metaInputContainer.appendChild(d.createElement('select'));
                projectInput.name = 'task-project-input';
                projectInput.id = 'task-project-input';

                const optionsTitle = projectInput.appendChild(d.createElement('option'));
                optionsTitle.selected = true;
                optionsTitle.disabled = true;
                optionsTitle.value = undefined;
                optionsTitle.textContent = 'Project';

                for (let i = 0; i < allProjects.length; i++) {
                    const option = projectInput.appendChild(d.createElement('option'));
                    option.value = allProjects[i].title;
                    option.textContent = allProjects[i].title;
                }

                const viewName = getViewContainer().querySelector('#view-name').textContent
                if (allProjects.some((project) => project.title === viewName)) {
                    const currentProject = [...projectInput.children].find((option) => option.textContent === viewName);
                    currentProject.selected = true;
                }
            })();

            const createPriorityInput = (function() {
                const priorityInput = metaInputContainer.appendChild(d.createElement('select'));
                priorityInput.name = 'task-priority-input';
                priorityInput.id = 'task-priority-input';

                const optionsTitle = priorityInput.appendChild(d.createElement('option'));
                optionsTitle.selected = true;
                optionsTitle.disabled = true;
                optionsTitle.value = undefined;
                optionsTitle.textContent = 'Priority';

                const highPriorityOption = priorityInput.appendChild(d.createElement('option'));
                highPriorityOption.value = 'High';
                highPriorityOption.textContent = 'High';

                const mediumPriorityOption = priorityInput.appendChild(d.createElement('option'));
                mediumPriorityOption.value = 'Medium';
                mediumPriorityOption.textContent = 'Medium';

                const lowPriorityOption = priorityInput.appendChild(d.createElement('option'));
                lowPriorityOption.value = 'Low';
                lowPriorityOption.textContent = 'Low';
            })();

            const dateInput = metaInputContainer.appendChild(d.createElement('input'));
            dateInput.type = 'date';
            dateInput.name = 'task-due-date-input';
            dateInput.id = 'task-due-date-input';
        })();

        const createBtnsContainer = (function() {
            const btnsContainer = form.appendChild(d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            const cancelBtn = btnsContainer.appendChild(d.createElement('button'));
            cancelBtn.classList.add('cancel-btn', 'cancel-form-btn');
            cancelBtn.textContent = 'Cancel';

            const createBtn = btnsContainer.appendChild(d.createElement('button'));
            createBtn.classList.add('create-btn');
            createBtn.id = 'create-task-btn';
            createBtn.textContent = 'Create Task';
        })();
    })();

    return newTaskForm;
}

export function removeNewTaskForm() {
    getViewContainer().removeChild(d.querySelector('.new-task-form-container'));
    const addTaskBtn = d.getElementById('add-task-btn');
    addTaskBtn.disabled = false;
}
