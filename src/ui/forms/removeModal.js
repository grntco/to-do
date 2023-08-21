import { d, mainContainer } from "../mainContainer";

export default function removeModal() {
    mainContainer.removeChild(d.querySelector('.modal'));
}