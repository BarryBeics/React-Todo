import TaskList from '../../primatives/Lists/TaskList';
import ListCard from '../../primatives/Cards/SectionCard';
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
        <ListCard
        title='Completed Tasks'
        svgSrc={undrawCompletedTasks}
        svgAlt='Completed Tasks'
        >
            {completedTasks.length > 0 ? (
                <TaskList
                tasks={tasks} 
                markAsComplete={markAsComplete} 
                showCompleted={true}
                checkmarkColour='green'
                showDeleteButton={false}  // No delete button required for completed tasks
                />
            ) : (
                <Caption1>You have no completed tasks.</Caption1> 
            )}
        </ListCard>
    );
};

export default CompletedList;