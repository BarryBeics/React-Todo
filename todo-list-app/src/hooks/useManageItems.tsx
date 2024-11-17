import { useState, useEffect, useCallback } from 'react';
import type { Item } from '../types/Item';
import { sampleItems } from '../data/sampleData';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

const STORAGE_KEY = 'items';

export function useManageItems() {
    const [items, setItems] = useState<Item[]>(() => loadFromLocalStorage<Item[]>(STORAGE_KEY, sampleItems));
    const [newItem, setNewItem] = useState<{ title: string; turnover: string; leasehold: string; description: string }>({ 
        title: '', 
        turnover: '', 
        leasehold: '', 
        description: '' });
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        saveToLocalStorage(STORAGE_KEY, items);
    }, [items]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value,
        }));
    };
    

    const addItem = useCallback(() => {
        if (!newItem.title.trim()) {
            setError('Item title is required');
            return;
        }

        const newItemObj: Item = {
            id: crypto.randomUUID(),
            title: newItem.title.trim(),
            turnover: newItem.turnover?.trim() || '',
            leasehold: newItem.leasehold?.trim() || '',
            description: newItem.description?.trim() || '',
            favourite: false
        };

        setItems(prevItems => [...prevItems, newItemObj]);
        setNewItem({ title: '', turnover: '', leasehold: '', description: '' });  // Clear the form after adding
        setError(null); // Clear error if Item was added successfully
    }, [newItem]);

    const handleAddItem = useCallback(() => {
        addItem();
    }, [addItem]);

    const deleteItem = (itemId: string) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    };
    

    const markAsFavourite = (itemId: string) => {
        const updatedItems = items.map(item =>
            item.id === itemId ? { ...item, favourite: !item.favourite } : item
        );
        setItems(updatedItems);
    };

    return { items, newItem, error, handleInputChange, addItem, handleAddItem, deleteItem, markAsFavourite };
};

export default useManageItems;