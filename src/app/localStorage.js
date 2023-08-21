import { allProjects } from "./app";
import { allTasks } from "./task";
import parseISO from 'date-fns/parseISO'

export function saveToLocalStorage(data) {
    let keyName = '';
    data === allTasks ? keyName = "savedTasks" : keyName = "savedProjects";

    let serializedData = JSON.stringify(data);
    localStorage.setItem(keyName, serializedData);
}

export function getFromLocalStorage(data) {
    let deserializedData;

    if (data === allTasks) {
        deserializedData = JSON.parse(localStorage.getItem("savedTasks"));
        if (deserializedData !== null) {
            deserializedData.forEach((item) => {
                item.add = function() {
                    allTasks.push(item);
                }
    
                item.delete = function() {
                    let index = allTasks.findIndex((task) => task === item);
                    allTasks.splice(index, 1);
                }
    
                item.dueDate = parseISO(item.dueDate);
            });

            data = deserializedData;
        }
    } else if (data === allProjects) {
        deserializedData = JSON.parse(localStorage.getItem("savedProjects"));
        if (deserializedData !== null) {
            deserializedData.forEach((item) => {
                item.add = function() {
                    allProjects.push(item);
                }
    
                item.delete = function() {
                    let index = allProjects.findIndex((project) => project === item);
                    allProjects.splice(index, 1);
                }
    
                item.getTasks = function() {
                    return allTasks.filter(task => task.project === item.title);
                }
            });

            data = deserializedData;
        }
    }
    return data; 
}