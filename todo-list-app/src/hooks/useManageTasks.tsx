import { useState, useEffect } from 'react';
import type { Tasks } from '../types/Tasks';
import { sampleTasks } from '../data/sampleData';

export function useCreateTask() {
    const [tasks, setTasks] = useState<Tasks[]>(sampleTasks);
    const [newTask, setNewTask] = useState<{ title: string; description: string }>({ title: '', description: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewTask({ ...newTask, [field]: e.target.value });
    };

    const addTask = () => {
        if (!newTask.title) return;
        
        const newtask: Tasks = {
            id: crypto.randomUUID(),
            title: newTask.title,
            description: newTask.description || '',
            completed: false
        };
        setTasks([...tasks, newtask]);
        setNewTask({ title: '', description: '' });
    };

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const markAsComplete = (taskId: string) => {
        setTasks(
            tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
        );
    };

    return { tasks, newTask, handleInputChange, addTask, deleteTask, markAsComplete };
};

export default useCreateTask;