import { Subtitle2, Body1, useThemeClassName } from '@fluentui/react-components';
import { Heart24Regular, Delete24Filled } from '@fluentui/react-icons';
import type { Item } from '../../../types/Item';
import ItemCard from '../Cards/ItemCard';
import ConfirmationDialog from '../DialogBox/ConfirmationDialog';
import useActionDialog from '../../../hooks/useActionDialog';
import IconButton from '../Buttons/IconButton';
import Grid from '../Grid/Grid';
import undrawTodoList from '../../../assets/undraw_to_do_list.svg';
import './Lists.css'; 

interface ItemListProps {
    items: Item[];
    markAsFavourite: (itemId: string) => void;
    deleteItem?: (itemId: string) => void; // Optional, as Favourited items don't need deletion
    showFavourite: boolean;  // Filter for Favourited or nonFavourite items
    heartColour: string;  // Customize the colour of the heart icon
    showDeleteButton?: boolean;  // Optionally show or hide delete button
}

const ItemList: React.FC<ItemListProps> = ({
    items,
    markAsFavourite,
    deleteItem,
    showFavourite,
    heartColour,
    showDeleteButton = true,
}) => {
    const { isDialogOpen, selectedItem, openDialog, closeDialog, confirmAction } = useActionDialog();
    const themeClassName = useThemeClassName();

    return (
        <Grid className={themeClassName}>
            {items
                .filter(item => item.favourite === showFavourite)
                .map(item => (
                    <ItemCard
                        key={item.id}
                        // Adjust title and favourite button to be side by side
                        title={
                            <div className="title-container">
                                <Subtitle2>{item.title}</Subtitle2>
                                {/* Mark as Favourite Button (moved next to title) */}
                                <IconButton
                                    icon={<Heart24Regular />}
                                    onClick={() => markAsFavourite(item.id)}
                                    color={heartColour}
                                    appearance="transparent"
                                    title="Mark as Favourite"
                                    ariaLabel="Mark as Favourite"
                                    label="Favourite"
                                    className="favourite-icon"
                                />
                            </div>
                        }
                        svgSrc={undrawTodoList}
                        svgAlt='To Do List'
                        // Wrap multiple elements with a fragment
                        turnover={
                            <>
                                <Subtitle2>Turnover:</Subtitle2> 
                                <Body1>{item.turnover}</Body1>
                            </>
                        }
                        leasehold={
                            <>
                                <Subtitle2>Leasehold:</Subtitle2> 
                                <Body1>{item.leasehold}</Body1>
                            </>
                        }
                        footerContent={
                            <div className="item-buttons">

                                {/* Delete Button (if enabled) */}
                                {showDeleteButton && deleteItem && (
                                    <IconButton
                                        icon={<Delete24Filled />}
                                        onClick={() => openDialog(item)}
                                        color="#c50f1f"
                                        appearance="transparent"
                                        title="Delete item"
                                        ariaLabel="Delete item"
                                        label="Delete"
                                    />
                                )}
                            </div>
                        }
                    >
                        {/* item Description */}
                        {item.description && <Body1>{item.description}</Body1>}
                    </ItemCard>
                ))}

            {/* Confirmation Dialog */}
            {isDialogOpen && selectedItem && (
                <ConfirmationDialog
                    itemTitle={selectedItem.title}
                    onConfirm={() => deleteItem && confirmAction(deleteItem)}
                    onCancel={closeDialog}
                />
            )}
        </Grid>
    );
};

export default ItemList;