import { add } from "date-fns";
import { allProjects } from "./app";
import { d, mainContainer } from "./mainContainer";
import { getViewContainer } from "./viewContainer";

function toggleBackgroundModalBlur() {
    if (mainContainer.classList.contains('modal-bg-blur')) {
        mainContainer.classList.remove('modal-bg-blur');
    } else {
        mainContainer.classList.add('modal-bg-blur');
    }
}

export function createNewProjectModal() {
    toggleBackgroundModalBlur();

    const newProjectModal = mainContainer.appendChild(d.createElement('div'));
    newProjectModal.classList.add('new-project-modal', 'modal');

    const createForm = (function() {
        const form = newProjectModal.appendChild(d.createElement('form'));

        const h3 = form.appendChild(d.createElement('h3'));
        h3.textContent = 'New Project';

        const createFieldset = (function() {
            const fieldset = form.appendChild(d.createElement('fieldset'));

            const titleInput = fieldset.appendChild(d.createElement('input'));
            titleInput.type = 'text';
            titleInput.name = 'project-name-input';
            titleInput.id = 'project-name-input';
            titleInput.placeholder = 'Name';
            titleInput.autocomplete = 'off';

            const descriptionInput = fieldset.appendChild(d.createElement('div'));
            descriptionInput.innerHTML = `<span class="textarea" role="textbox" contenteditable></span>`;
        })();

        const createBtnsContainer = (function() {
            const btnsContainer = form.appendChild(d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            const cancelBtn = btnsContainer.appendChild(d.createElement('button'));
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            const createBtn = btnsContainer.appendChild(d.createElement('button'));
            createBtn.classList.add('create-btn');
            createBtn.id = 'create-project-btn';
            createBtn.textContent = 'Create Project';
        })();
    })();

    return newProjectModal;
}

export function createNewTaskFormContainer() {
    const addTaskBtn = d.getElementById('add-task-btn');
    addTaskBtn.disabled = true;
    // will need to re-enable somewhere

    const newTaskFormContainer = getViewContainer().insertBefore(d.createElement('div'), d.getElementById('add-task-btn'));
    newTaskFormContainer.classList.add('new-task-form-container');

    const createForm = (function() {
        const form = newTaskFormContainer.appendChild(d.createElement('form'));

        const createMainInfoFieldset = (function() {
            const fieldset = form.appendChild(d.createElement('fieldset'));

            const titleInput = fieldset.appendChild(d.createElement('input'));
            titleInput.type = 'text';
            titleInput.name = 'task-name-input';
            titleInput.id = 'task-name-input';
            titleInput.placeholder = 'Task name';
            titleInput.autocomplete = 'off';

            const descriptionInput = fieldset.appendChild(d.createElement('div'));
            descriptionInput.innerHTML = `<span class="textarea" role="textbox" contenteditable></span>`;
        })();

        const createMetaInputContainer = (function() {
            const metaInputContainer = form.appendChild(d.createElement('fieldset'));
            metaInputContainer.classList.add('meta-input-container');

            const createProjectInput = (function() {
                const projectInput = metaInputContainer.appendChild(d.createElement('select'));
                projectInput.name = 'project-input';
                projectInput.id = 'project-input';

                const optionsTitle = projectInput.appendChild(d.createElement('option'));
                optionsTitle.selected = true;
                optionsTitle.disabled = true;
                optionsTitle.textContent = 'Project';

                for (let i = 0; i < allProjects.length; i++) {
                    const option = projectInput.appendChild(d.createElement('option'));
                    option.value = allProjects[i].title;
                    option.textContent = allProjects[i].title;
                }
            })();

            const createPriorityInput = (function() {
                const priorityInput = metaInputContainer.appendChild(d.createElement('select'));
                priorityInput.name = 'priority-input';
                priorityInput.id = 'priority-input';

                const optionsTitle = priorityInput.appendChild(d.createElement('option'));
                optionsTitle.selected = true;
                optionsTitle.disabled = true;
                optionsTitle.textContent = 'Priority';

                const highPriorityOption = priorityInput.appendChild(d.createElement('option'));
                highPriorityOption.value = 'high';
                highPriorityOption.textContent = 'High';

                const mediumPriorityOption = priorityInput.appendChild(d.createElement('option'));
                mediumPriorityOption.value = 'medium';
                mediumPriorityOption.textContent = 'Medium';

                const lowPriorityOption = priorityInput.appendChild(d.createElement('option'));
                lowPriorityOption.value = 'low';
                lowPriorityOption.textContent = 'Low';
            })();

            const dateInput = metaInputContainer.appendChild(d.createElement('input'));
            dateInput.type = 'date';
            dateInput.name = 'due-date-input';
            dateInput.id = 'due-date-input';
        })();

        const createBtnsContainer = (function() {
            const btnsContainer = form.appendChild(d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            const cancelBtn = btnsContainer.appendChild(d.createElement('button'));
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            const createBtn = btnsContainer.appendChild(d.createElement('button'));
            createBtn.classList.add('create-btn');
            createBtn.id = 'create-task-btn';
            createBtn.textContent = 'Create Task';
        })();

    })();
}

export function removeModal() {
    console.log('hello');
    mainContainer.removeChild(d.querySelector('.modal'));
}

// export function removeNewTaskFormContainer() {
//     console.log()
//     getViewContainer().removeChild(d.querySelector('.new-task-form-container'));
// };