import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import useManageItems from './hooks/useManageItems';
import { useState } from 'react';
import { FavouriteList, InputForm, TodoList } from './components/templates';
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
            
            
            {/* Input Form for adding Items */}
            <InputForm 
              newItem={newItem}
              handleInputChange={handleInputChange}
              handleAddItem={handleAddItem} 
              error={error} 
            />
 
            {/* Todo List */}
            <TodoList 
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
