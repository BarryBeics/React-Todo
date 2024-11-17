import ItemList from '../../primatives/Lists/ItemList';
import WrapperCard from '../../primatives/Cards/WrapperCard';
import type { Item } from '../../../types/Item';
import { Caption1 } from '@fluentui/react-components';


interface FavouriteListProps {
    items: Item[];
    markAsFavourite: (itemId: string) => void;
}

const FavouriteList: React.FC<FavouriteListProps> = ({ items, markAsFavourite }) => {
    const Favouriteitems = items.filter(item => item.favourite);

    return (
        <WrapperCard>
            {Favouriteitems.length > 0 ? (
                <ItemList
                items={items} 
                markAsFavourite={markAsFavourite} 
                showFavourite={true}
                heartColour='#FF3377'
                showDeleteButton={false}  // No delete button required for Favourited items
                />
            ) : (
                <Caption1>You have no favourites.</Caption1> 
            )}
        </WrapperCard>
    );
};

export default FavouriteList;