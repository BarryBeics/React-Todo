import TaskList from '../../primatives/Lists/TaskList';
import WrapperCard from '../../primatives/Cards/WrapperCard';
import type { Tasks } from '../../../types/Tasks';
import undrawCompletedTasks from '../../../assets/undraw_completed_tasks.svg';
import { Caption1 } from '@fluentui/react-components';


interface CompletedListProps {
    tasks: Tasks[];
    markAsComplete: (taskId: string) => void;
}

const CompletedList: React.FC<CompletedListProps> = ({ tasks, markAsComplete }) => {
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <WrapperCard>
            {completedTasks.length > 0 ? (
                <TaskList
                tasks={tasks} 
                markAsComplete={markAsComplete} 
                showCompleted={true}
                checkmarkColour='#4A9F30'
                showDeleteButton={false}  // No delete button required for completed tasks
                />
            ) : (
                <Caption1>You have no completed tasks.</Caption1> 
            )}
        </WrapperCard>
    );
};

export default CompletedList;