import TaskList from '../../primatives/Lists/TaskList';
import ListCard from '../../primatives/Cards/SectionCard';
import type { Tasks } from '../../../types/Tasks';
import undrawTodoList from '../../../assets/undraw_to_do_list.svg';
import { Caption1 } from '@fluentui/react-components';


interface TodoListProps {
    tasks: Tasks[];
    markAsComplete: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, markAsComplete, deleteTask }) => {
    const incompleteTasks = tasks.filter(task => !task.completed);

    return (
        <ListCard
        title='To Do List'
        svgSrc={undrawTodoList}
        svgAlt='To Do List'
        >
            {incompleteTasks.length > 0 ? ( 
                <TaskList
                tasks={tasks} 
                markAsComplete={markAsComplete} 
                showCompleted={false}
                checkmarkColour='grey'
                showDeleteButton={true}  // No delete button required for completed tasks
                />
            ) : (
                <Caption1>You have no completed tasks.</Caption1> 
            )}
        </ListCard>
    );
};

export default TodoList;