import { Subtitle2, Body1, useThemeClassName } from '@fluentui/react-components';
import { CheckmarkCircle24Filled, Delete24Filled } from '@fluentui/react-icons';
import type { Tasks } from '../../../types/Tasks';
import ConfirmationDialog from '../DialogBox/ConfirmationDialog';
import useActionDialog from '../../../hooks/useActionDialog';
import IconButton from '../../primatives/Buttons/IconButton';
import Stack from '../../primatives/Stack/Stack';
import './Lists.css'; 

interface TaskListProps {
    tasks: Tasks[];
    markAsComplete: (taskId: string) => void;
    deleteTask?: (taskId: string) => void; // Optional, as completed tasks don't need deletion
    showCompleted: boolean;  // Filter for completed or incomplete tasks
    checkmarkColour: string;  // Customize the colour of the checkmark
    showDeleteButton?: boolean;  // Optionally show or hide delete button
}

const TaskList: React.FC<TaskListProps> = ({ tasks, markAsComplete, deleteTask, showCompleted, checkmarkColour, showDeleteButton = true }) => {
    const { isDialogOpen, selectedTask, openDialog, closeDialog, confirmAction } = useActionDialog();
    const themeClassName = useThemeClassName();

    return (
        <Stack className={themeClassName}>
            {tasks
                .filter(task => task.completed === showCompleted)
                .map(task => (
                    <div key={task.id} className="task-item">
                        {/* Task title and optional description */}
                        <div className="task-info">
                            <Subtitle2>{task.title}</Subtitle2>
                            {task.description && <Body1>{task.description}</Body1>}
                        </div>

                        {/* Buttons */}
                        <div className="task-buttons">
                        <IconButton 
                            icon={<CheckmarkCircle24Filled />} 
                            onClick={() => markAsComplete(task.id)} 
                            color={checkmarkColour} 
                            appearance="transparent" 
                            title="Mark as Complete" 
                            ariaLabel="Mark as Complete" 
                            label="Complete" 
                        />

                        {showDeleteButton && deleteTask && (
                            <IconButton 
                                icon={<Delete24Filled />} 
                                onClick={() => openDialog(task)} 
                                color="#c50f1f" 
                                appearance="transparent" 
                                title="Delete Task" 
                                ariaLabel="Delete Task" 
                                label="Delete" 
                            />
                        )}
                        </div>
                    </div>
                ))}

            {/* Confirmation Dialog */}
            {isDialogOpen && selectedTask && (
                <ConfirmationDialog
                    taskTitle={selectedTask.title}
                    onConfirm={() => deleteTask && confirmAction(deleteTask)}
                    onCancel={closeDialog}
                />
            )}
        </Stack>
    );
};

export default TaskList;