import { useState } from 'react';
import type { Item } from '../types/Item'; 

const useActionDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Item | null>(null);

    const openDialog = (task: Item) => {
        setSelectedTask(task);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedTask(null);
    };

    const confirmAction = (onConfirm: (taskId: string) => void) => {
        if (selectedTask) {
            onConfirm(selectedTask.id);
        }
        closeDialog();
    };

    return { isDialogOpen, selectedTask, openDialog, closeDialog, confirmAction };
};

export default useActionDialog;