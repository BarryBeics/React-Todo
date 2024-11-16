import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import useManageTasks from './hooks/useManageTasks';
import { useState } from 'react';
import { CompletedList, InputForm, TodoList } from './components/templates';
import WrapperCard from './components/primatives/Cards/WrapperCard';
import ToggleTheme from './components/primatives/ToggleTheme/ToggleTheme';

const App: React.FC = () => {
  const { tasks, newTask, deleteTask, markAsComplete, handleInputChange, handleAddTask, error } = useManageTasks();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <FluentProvider theme={isDarkMode ? teamsDarkTheme : teamsLightTheme}>
      <WrapperCard>        
        <ToggleTheme 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
            
            
            {/* Input Form for adding tasks */}
            <InputForm 
              newTask={newTask}
              handleInputChange={handleInputChange}
              handleAddTask={handleAddTask} 
              error={error} 
            />
 
            {/* Todo List */}
            <TodoList 
              tasks={tasks} 
              markAsComplete={markAsComplete} 
              deleteTask={deleteTask}
            />

            {/* Completed List */}
            <CompletedList
            tasks={tasks}
            markAsComplete={markAsComplete}
            />
            
            </WrapperCard>
        </FluentProvider>
    );
};

export default App;
