import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import useManageTasks from './hooks/useManageTasks';
import { useState } from 'react';
import CompletedList from './components/templates/CompletedList';
import TodoList from './components/templates/TodoList';
import InputForm from './components/templates/InputForm';
import MainCard from './components/primatives/Cards/MainCard';
import ToggleTheme from './components/primatives/ToggleTheme/ToggleTheme';

const App: React.FC = () => {
  const { tasks, newTask, deleteTask, markAsComplete, handleInputChange, handleAddTask, error } = useManageTasks();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <FluentProvider theme={isDarkMode ? teamsDarkTheme : teamsLightTheme}>
      <MainCard>        
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
            
            </MainCard>
        </FluentProvider>
    );
};

export default App;
