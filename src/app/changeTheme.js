import { d } from "../ui/mainContainer"

export default function changeTheme() {
    const body = d.querySelector('body');
    body.classList.toggle('dark-mode');

    const changeThemeIcon = (function() {
        const themeToggleBtn = d.querySelector('.theme-toggle-btn');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
        } else {
            themeToggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`
        }
    })();
}