import { allTasks } from "./task";
import { saveToLocalStorage } from "./localStorage";
import refreshContent from "../ui/refreshContent";

export function completeTask(taskCard) {
    taskCard.classList.add('completed');
    taskCard.querySelector('.primary-info').classList.add('strikethrough');

    const taskObj = allTasks.find((task) => task.title === taskCard.querySelector('.name').textContent)

    setTimeout(() => {
        taskObj.delete();
        saveToLocalStorage(allTasks);
        refreshContent();
    }, 2000);
};

