import { allTasks } from "./app";
import refreshContent from "./refreshContent";

export function completeTask(taskCard) {
    taskCard.classList.add('completed');
    taskCard.querySelector('.primary-info').classList.add('strikethrough');

    const taskObj = allTasks.find((task) => task.title === taskCard.querySelector('.name').textContent)

    setTimeout(() => {
        taskObj.delete();
        refreshContent();
    }, 2000)
}

