import { Task, Project, allTasks, allProjects } from "./app";

export function saveToLocalStorage(array) {
    let keyName = '';

    array[0] instanceof Task ? keyName = 'allTasks' : keyName = 'allProjects';

    localStorage.setItem(`${keyName}`, JSON.stringify(array));
}

export function getFromLocalStorage(array) {

    if (array[0] instanceof Task) {
        array = JSON.parse(localStorage.getItem('allTasks'));

        if (array.length > 0) {
            array.forEach((item) => {
                item.add = function() {
                    allTasks.push(item);
                    saveToLocalStorage(allTasks);
                }
    
                item.delete = function() {
                    let index = allTasks.findIndex((task) => task === item);
                    allTasks.splice(index, 1);
                    saveToLocalStorage(allTasks);
                }
            });
        }
    } else if (array[0] instanceof Project) {
        array = JSON.parse(localStorage.getItem('allProjects'));

        if (array.length > 0) {
            array.forEach((item) => {
                item.add = function() {
                    allProjects.push(item);
                    saveToLocalStorage(allProjects);
                }
    
                item.delete = function() {
                    let index = allProjects.findIndex((project) => project === item);
                    allProjects.splice(index, 1);
                    saveToLocalStorage(allProjects);
                }
    
                item.getTasks = function() {
                    return JSON.parse(localStorage.getItem('allTasks')).filter(task => task.project === item.title);
                }
            });
        }
    }

    console.log(array);
    return array; 
}