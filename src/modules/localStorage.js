import { Task, Project, allTasks, allProjects } from "./app";
import parseISO from 'date-fns/parseISO'

export function saveToLocalStorage(data) {
    let keyName = '';
    data === allTasks ? keyName = "savedTasks" : keyName = "savedProjects";

    let serializedData = JSON.stringify(data);
    localStorage.setItem(keyName, serializedData);
}

export function getFromLocalStorage(data) {
    let deserializedData = [];

    if (data === allTasks) {
        deserializedData = JSON.parse(localStorage.getItem("savedTasks"));

        deserializedData.forEach((item) => {
            item.add = function() {
                allTasks.push(item);
                // saveToLocalStorage(allTasks);
            }

            item.delete = function() {
                let index = allTasks.findIndex((task) => task === item);
                allTasks.splice(index, 1);
                // saveToLocalStorage(allTasks);
            }

            // if (item.dueDate instanceof Date) {
            item.dueDate = parseISO(item.dueDate);
            // }
        });
    } else if (data === allProjects) {
        deserializedData = JSON.parse(localStorage.getItem("savedProjects"));

        // if (deserializedArray.length > 0) {
            deserializedData.forEach((item) => {
                item.add = function() {
                    allProjects.push(item);
                    // saveToLocalStorage(allProjects);
                }
    
                item.delete = function() {
                    let index = allProjects.findIndex((project) => project === item);
                    allProjects.splice(index, 1);
                    // saveToLocalStorage(allProjects);
                }
    
                item.getTasks = function() {
                    // return getFromLocalStorage(allTasks).filter(task => task.project === item.title);
                    return allTasks.filter(task => task.project === item.title);
                }
            });
        // }
    }
    data = deserializedData;
    console.log(data)
    return data; 
}