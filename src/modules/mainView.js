const d = document;

const app = d.getElementById('app');

function createNav() {
    const nav = app.insertBefore(d.createElement('nav'), mainContainer);

    const sidebarBtn = nav.appendChild(d.createElement('button'));
    sidebarBtn.classList.add('icon-btn');
    sidebarBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    const h1 = nav.appendChild(d.createElement('h1'));
    h1.textContent = 'Todoit';

    const leftContainer = nav.appendChild(d.createElement('div'));
    leftContainer.classList.add('left-container');

    const themeBtn = leftContainer.appendChild(d.createElement('button'));
    themeBtn.classList.add('icon-btn');
    themeBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;

    const profileImg = leftContainer.appendChild(d.createElement('img'));
    profileImg.src = './profile_lofi_generator profile < 1MB.png';
    profileImg.alt = 'profile image';

    return nav;
}

const mainContainer = app.appendChild(d.createElement('section'));
mainContainer.classList.add('main-container');

function createViewContainer(view) {
    // view is an object, such as a project, that contains the title, description, and tasks
    const viewContainer = mainContainer.appendChild(d.createElement('div'));
    viewContainer.classList.add('view-container');

    const viewName = viewContainer.appendChild(d.createElement('h2'));
    viewName.id = 'view-name'; //maybe don't need this...
    viewName.textContent = view.title;

    const viewDescription = viewContainer.appendChild(d.createElement('p'));
    viewDescription.id = 'view-description'; //maybe don't need this...
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
                completeBtn.classList.add('complete-btn');
                completeBtn.innerHTML = `<i class="fa-regular fa-circle"></i>`;

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
    
                    const priorityTag = metaContainer.appendChild(d.createElement('li'));
                    priorityTag.classList.add('meta-tag');
                    // priorityTag.classList.add('') how to add priorty class? with switch?
                    priorityTag.textContent = taskObj.priority;
    
                    const projectTag = metaContainer.appendChild(d.createElement('li'));
                    projectTag.classList.add('meta-tag');
                    projectTag.textContent = taskObj.project;
                    
                    const dueDateTag = metaContainer.appendChild(d.createElement('li'));
                    dueDateTag.classList.add('meta-tag');
                    dueDateTag.textContent = taskObj.dueDate;
                })();
            } 
        })();
    })();

    const addTaskBtn = viewContainer.appendChild(d.createElement('button'));
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Add Task`;

    return viewContainer;
}


export { d, mainContainer, createNav, createViewContainer };