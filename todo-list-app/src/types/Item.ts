export type Item = {
    id: string; // Unique identifier for the item
    title: string; // Item's title
    turnover?: string; // Optional turnover details
    leasehold?: string; // Optional leasehold details
    description?: string; // Optional description of the item
    favourite: boolean; // Whether the item is marked as favourite
    hiddenCode?: string; // Code required to reveal the item
  };
  
