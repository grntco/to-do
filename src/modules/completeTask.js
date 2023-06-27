import { allTasks } from "./app";
import refreshContent from "./refreshContent";

export function completeTask(taskCard) {
    taskCard.querySelector('.primary-info').classList.add('completed');

    const taskObj = allTasks.find((task) => task.title === taskCard.querySelector('.name').textContent)

    setTimeout(() => {
        taskObj.delete();
        refreshContent();
    }, 2500)
}

