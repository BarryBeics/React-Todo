import { useState, useEffect, useCallback } from 'react';
import type { Business } from '../types/Business';
import { sampleTasks } from '../data/sampleData';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

const STORAGE_KEY = 'tasks';

export function useManageTasks() {
    const [tasks, setTasks] = useState<Business[]>(() => loadFromLocalStorage<Business[]>(STORAGE_KEY, sampleTasks));
    const [newTask, setNewTask] = useState<{ title: string; turnover: string; leasehold: string; description: string }>({ title: '', turnover: '', leasehold: '', description: '' });
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        saveToLocalStorage(STORAGE_KEY, tasks);
    }, [tasks]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }));
    };
    

    const addTask = useCallback(() => {
        if (!newTask.title.trim()) {
            setError('Task title is required');
            return;
        }

        const newTaskObj: Business = {
            id: crypto.randomUUID(),
            title: newTask.title.trim(),
            turnover: newTask.turnover?.trim() || '',
            leasehold: newTask.leasehold?.trim() || '',
            description: newTask.description?.trim() || '',
            completed: false
        };

        setTasks(prevTasks => [...prevTasks, newTaskObj]);
        setNewTask({ title: '', turnover: '', leasehold: '', description: '' });  // Clear the form after adding
        setError(null); // Clear error if task was added successfully
    }, [newTask]);

    const handleAddTask = useCallback(() => {
        addTask();
    }, [addTask]);

    const deleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };
    

    const markAsComplete = (taskId: string) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return { tasks, newTask, error, handleInputChange, addTask, handleAddTask, deleteTask, markAsComplete };
};

export default useManageTasks;