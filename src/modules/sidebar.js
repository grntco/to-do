import { allProjects, inboxView, todayView, weekView } from "./app";
import { d, mainContainer } from "./mainContainer";

export function createSidebar() {

    const sidebar = mainContainer.appendChild(d.createElement('div'));
    sidebar.classList.add('sidebar');

    const createTopViewListContainer = (function() {
        const topViewListContainer = sidebar.appendChild(d.createElement('div'));
        topViewListContainer.classList.add('view-list-container');

        const createBtnsContainer = (function() {
            const btnsContainer = topViewListContainer.appendChild(d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            const inboxViewBtn = btnsContainer.appendChild(d.createElement('button'));
            inboxViewBtn.id = 'inbox-view-btn';
            inboxViewBtn.innerHTML = `<i class="fa-solid fa-inbox"></i>${inboxView.title}<span>${inboxView.getTasks().length}</span>`
            // Need inboxView.length

            const todayViewBtn = btnsContainer.appendChild(d.createElement('button'));
            todayViewBtn.id = 'today-view-btn';
            todayViewBtn.innerHTML = `<i class="fa-solid fa-calendar-day"></i>${todayView.title}<span>${todayView.getTasks().length}</span>`
            // Need todayView.length

            const weekViewBtn = btnsContainer.appendChild(d.createElement('button'));
            weekViewBtn.id = 'week-view-btn';
            weekViewBtn.innerHTML = `<i class="fa-solid fa-calendar-week"></i>${weekView.title}<span>${weekView.getTasks().length}</span>`;
            // Need weekView.length

        })();
    })();

    const createProjectsViewListContainer = (function() {
        const projectsViewListContainer = sidebar.appendChild(d.createElement('div'));
        projectsViewListContainer.classList.add('view-list-container');

        const createProjectsHeading = (function() {
            const projectsHeading = projectsViewListContainer.appendChild(d.createElement('div'));
            projectsHeading.classList.add('projects-heading');

            const h3 = projectsHeading.appendChild(d.createElement('h3'));
            h3.textContent = 'Projects';

            const btn = projectsHeading.appendChild(d.createElement('button'));
            btn.classList.add('icon-btn');
            btn.id = 'add-project-btn';
            btn.title = 'Add new project';
            btn.innerHTML = `<i class="fa-solid fa-plus"></i>`; 
        })();

        const createBtnsContainer = (function() {
            const btnsContainer = projectsViewListContainer.appendChild(d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            for (let i = 0; i < allProjects.length; i++) {
                const btn = btnsContainer.appendChild(d.createElement('button'));
                btn.innerHTML = `<i class="fa-solid fa-list-check"></i>${allProjects[i].title}<span>${allProjects[i].getTasks().length}</span>`
            }
        })();
    })();

    return sidebar;
};

export function toggleSidebar() {
    d.querySelector('.sidebar').classList.toggle('collapse');
};