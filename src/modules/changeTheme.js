import { d } from "./mainContainer"

export default function changeTheme() {
    const body = d.querySelector('body');
    body.classList.toggle('dark-mode')
}