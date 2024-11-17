import { useState } from 'react';
import type { Item } from '../types/Item'; 

const useActionDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const openDialog = (item: Item) => {
        setSelectedItem(item);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedItem(null);
    };

    const confirmAction = (onConfirm: (itemId: string) => void) => {
        if (selectedItem) {
            onConfirm(selectedItem.id);
        }
        closeDialog();
    };

    return { isDialogOpen, selectedItem, openDialog, closeDialog, confirmAction };
};

export default useActionDialog;