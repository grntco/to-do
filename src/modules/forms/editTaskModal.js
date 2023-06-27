import { allProjects } from "../app";
import { d, mainContainer } from "../mainContainer";

export default function createEditTaskModal(taskObj) {
    const editTaskModal = mainContainer.appendChild(d.createElement('div'));
    editTaskModal.classList.add('edit-task-modal', 'modal');

    const createForm = (function() {
        const form = editTaskModal.appendChild(d.createElement('form'));

        const createMainInfoFieldset = (function() {
            const fieldset = form.appendChild(d.createElement('fieldset'));

            const titleInput = fieldset.appendChild(d.createElement('input'));
            titleInput.type = 'text';
            titleInput.name = 'task-name-input';
            titleInput.id = 'task-name-input';
            titleInput.placeholder = 'Task name'
            titleInput.value = taskObj.title;
            titleInput.autocomplete = 'off';

            const descriptionInput = fieldset.appendChild(d.createElement('div'));
            descriptionInput.innerHTML = `<span class="textarea" role="textbox" contenteditable>${taskObj.description}</span>`;
        })();

        const createMetaInputContainer = (function() {
            const metaInputContainer = form.appendChild(d.createElement('fieldset'));
            metaInputContainer.classList.add('meta-input-container');

            const createProjectInput = (function() {
                const projectInput = metaInputContainer.appendChild(d.createElement('select'));
                projectInput.name = 'project-input';
                projectInput.id = 'project-input';

                const optionsTitle = projectInput.appendChild(d.createElement('option'));
                optionsTitle.disabled = true;
                // optionsTitle.selected = true;
                optionsTitle.textContent = 'Project';

                for (let i = 0; i < allProjects.length; i++) {
                    const option = projectInput.appendChild(d.createElement('option'));
                    option.value = allProjects[i].title;
                    option.textContent = allProjects[i].title;
                }

                if (taskObj.project) {
                    const currentProject = [...projectInput.children].find((option) => option.textContent === taskObj.project);
                    currentProject.selected = true;
                }
            })();

            const createPriorityInput = (function() {
                const priorityInput = metaInputContainer.appendChild(d.createElement('select'));
                priorityInput.name = 'priority-input';
                priorityInput.id = 'priority-input';

                const optionsTitle = priorityInput.appendChild(d.createElement('option'));
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

                const currentPriority = [...priorityInput.children].find((option) => option.textContent === taskObj.priority);
                currentPriority.selected = true;
            })();

            const dateInput = metaInputContainer.appendChild(d.createElement('input'));
            dateInput.type = 'date';
            dateInput.name = 'due-date-input';
            dateInput.id = 'due-date-input';
            // dateInput.innerHTML = taskObj.dueDate;
            // doesn't look like there's a way to add the currently selected date as the date input placeholder
        })();

        const createBtnsContainer = (function() {
            const btnsContainer = form.appendChild(d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            const cancelBtn = btnsContainer.appendChild(d.createElement('button'));
            cancelBtn.classList.add('cancel-btn', 'cancel-modal-btn');
            cancelBtn.textContent = 'Cancel';

            const createBtn = btnsContainer.appendChild(d.createElement('button'));
            createBtn.classList.add('create-btn');
            createBtn.id = 'done-edit-task-btn';
            createBtn.textContent = 'Done';
        })();
    })();
}