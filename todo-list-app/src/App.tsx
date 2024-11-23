import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import useManageItems from './hooks/useManageItems';
import { useState } from 'react';
import { FavouriteList, InputForm, ItemList, RevealCodeForm } from './components/templates';
import ToggleTheme from './components/primatives/ToggleTheme/ToggleTheme';

const App: React.FC = () => {
  const { items, newItem, deleteItem, markAsFavourite, handleInputChange, handleAddItem, error } = useManageItems();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <FluentProvider theme={isDarkMode ? teamsDarkTheme : teamsLightTheme}>
          
        <ToggleTheme 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
            {/* Reveal Code Form for revealing hidden Items */}
            <RevealCodeForm
            />
            
            {/* Input Form for adding Items */}
            <InputForm 
              newItem={newItem}
              handleInputChange={handleInputChange}
              handleAddItem={handleAddItem} 
              error={error} 
            />
 
            {/* Item List */}
            <ItemList 
              items={items} 
              markAsFavourite={markAsFavourite} 
              deleteItem={deleteItem}
            />

            {/* Favourited List */}
            <FavouriteList
            items={items}
            markAsFavourite={markAsFavourite}
            />
            
            
        </FluentProvider>
    );
};

export default App;
