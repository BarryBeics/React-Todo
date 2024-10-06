import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import useManageTasks from './hooks/useManageTasks';
import CompletedList from './components/templates/CompletedList';
import TodoList from './components/templates/TodoList';
import InputForm from './components/templates/InputForm';

const App: React.FC = () => {
  // Use the useCreateTask hook to manage task-related state and functions
  const { tasks, newTask, deleteTask, markAsComplete, handleInputChange, handleAddTask, error } = useManageTasks();



    return (
        <FluentProvider theme={webLightTheme}>
            <div style={{ maxWidth: '766px', margin: '0 auto', padding: '20px' }}>
            
            
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
            
          
            </div>
        </FluentProvider>
    );
};

export default App;
