import { d, app, mainContainer } from "./mainContainer";

export default function createNav() {
    const nav = app.insertBefore(d.createElement('nav'), mainContainer);

    const sidebarBtn = nav.appendChild(d.createElement('button'));
    sidebarBtn.classList.add('icon-btn', 'sidebar-toggle-btn');
    sidebarBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    const h1 = nav.appendChild(d.createElement('h1'));
    h1.textContent = 'Todoit';

    const leftContainer = nav.appendChild(d.createElement('div'));
    leftContainer.classList.add('left-container');

    const themeBtn = leftContainer.appendChild(d.createElement('button'));
    themeBtn.classList.add('icon-btn', 'theme-toggle-btn');
    themeBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;

    const profileImg = leftContainer.appendChild(d.createElement('img'));
    profileImg.src = './anon_profile.jpeg';
    profileImg.alt = 'profile image';

    return nav;
}