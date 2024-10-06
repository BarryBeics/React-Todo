import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import useManageTasks from './hooks/useManageTasks';
import CompletedList from './components/templates/CompletedList';

const App: React.FC = () => {
  // Use the useCreateTask hook to manage task-related state and functions
  const { tasks, newTask, addTask, deleteTask, markAsComplete, handleInputChange } = useManageTasks();



    return (
        <FluentProvider theme={webLightTheme}>
            <div style={{ maxWidth: '766px', margin: '0 auto', padding: '20px' }}>
            
            
            {/* Input Form for adding tasks */}
 
            
            {/* Todo List */}


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
