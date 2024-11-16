import TaskList from '../../primatives/Lists/TaskList';
import WrapperCard from '../../primatives/Cards/WrapperCard';
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

    console.log("Todo List")

    return (
        <WrapperCard>
            {incompleteTasks.length > 0 ? ( 
                <TaskList
                    tasks={tasks} 
                    markAsComplete={markAsComplete} 
                    deleteTask={deleteTask} 
                    showCompleted={false}
                    checkmarkColour='grey'
                    showDeleteButton={true}
                />
            ) : (
                <Caption1>You have no tasks, why not add one?</Caption1> 
            )}
        </WrapperCard>
    );
};

export default TodoList;