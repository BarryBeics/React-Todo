import ItemList from '../../primatives/Lists/ItemList';
import WrapperCard from '../../primatives/Cards/WrapperCard';
import type { Item } from '../../../types/Item';
import { Caption1 } from '@fluentui/react-components';


interface TodoListProps {
    items: Item[];
    markAsFavourite: (itemId: string) => void;
    deleteItem: (itemId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, markAsFavourite, deleteItem }) => {
    const nonFavouriteItems = items.filter(item => !item.favourite);

    console.log("Todo List")

    return (
        <WrapperCard>
            {nonFavouriteItems.length > 0 ? ( 
                <ItemList
                    items={items} 
                    markAsFavourite={markAsFavourite} 
                    deleteItem={deleteItem} 
                    showFavourite={false}
                    heartColour='grey'
                    showDeleteButton={true}
                />
            ) : (
                <Caption1>You have no businesses, why not add one?</Caption1> 
            )}
        </WrapperCard>
    );
};

export default TodoList;