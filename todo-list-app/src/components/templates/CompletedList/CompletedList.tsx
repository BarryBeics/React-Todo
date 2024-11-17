import TaskList from '../../primatives/Lists/TaskList';
import WrapperCard from '../../primatives/Cards/WrapperCard';
import type { Item } from '../../../types/Item';
import { Caption1 } from '@fluentui/react-components';


interface CompletedListProps {
    tasks: Item[];
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