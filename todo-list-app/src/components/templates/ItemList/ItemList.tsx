import ItemList from '../../primatives/Lists/ItemList';
import WrapperCard from '../../primatives/Cards/WrapperCard';
import type { Item } from '../../../types/Item';
import { Caption1 } from '@fluentui/react-components';
import { loadRevealCodes } from '../../../utils/localStorage'; // Utility to load codes from local storage


interface ListItemProps {
    items: Item[];
    markAsFavourite: (itemId: string) => void;
    deleteItem: (itemId: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ items, markAsFavourite, deleteItem }) => {
    const revealCodes = loadRevealCodes(); // Load the codes from local storage
    console.log(revealCodes); // Logs the array of reveal codes or an empty array


    // Filter items based on `hiddenCode` logic
    const visibleItems = items.filter(item => 
        !item.hiddenCode || revealCodes.includes(item.hiddenCode)
    );

    // Further filter visible items to show only non-favourite items
    const nonFavouriteItems = visibleItems.filter(item => !item.favourite);

    console.log("List Item")

    return (
        <WrapperCard>
            {nonFavouriteItems.length > 0 ? ( 
                <ItemList
                    items={nonFavouriteItems} 
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

export default ListItem;