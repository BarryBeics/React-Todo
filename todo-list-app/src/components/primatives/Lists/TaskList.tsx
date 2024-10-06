import { Button, Subtitle2, Body1 } from '@fluentui/react-components';
import { CheckmarkCircle24Filled, Delete24Filled } from '@fluentui/react-icons';
import type { Tasks } from '../../../types/Tasks';
import ConfirmationDialog from '../DialogBox/ConfirmationDialog';
import useActionDialog from '../../../hooks/useActionDialog';

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

    return (
        <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px' 
                }}
                >
                    {tasks
                        .filter(task => task.completed === showCompleted)
                        .map(task => (
                            <div 
                                key={task.id}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px',
                                    borderBottom: '1px solid #ccc'
                                }}
                            >
                                {/* Task title and optional description */}
                               <div 
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column' 
                                    }}
                                >
                                    <Subtitle2>{task.title}</Subtitle2>
                                    {task.description && <Body1>{task.description}</Body1>}
                                </div>

                                {/* Buttons */}
                                <div 
                                    style={{ 
                                        display: 'flex', 
                                        gap: '10px' 
                                    }}
                                >
                                    <Button 
                                        icon={<CheckmarkCircle24Filled />} 
                                        onClick={() => markAsComplete(task.id)} 
                                        style={{ color: checkmarkColour }} 
                                        appearance="transparent"
                                        title='Mark as Complete'
                                        aria-label='Mark as Complete'
                                    >
                                        Complete
                                    </Button>

                                    {showDeleteButton && deleteTask && (
                                        <Button 
                                            icon={<Delete24Filled />}
                                            onClick={() => openDialog(task)} 
                                            appearance="transparent"
                                            style={{ color: 'red' }}
                                            title='Delete Task'
                                            aria-label='Delete Task'
                                        >
                                            Delete
                                        </Button>
                                    )}
                        </div>
                    </div>
                ))}

            {/* Confirmation Dialog */}
            {isDialogOpen && selectedTask && (
                <ConfirmationDialog
                    taskTitle={selectedTask.title}
                    onConfirm={() => deleteTask && confirmAction(deleteTask)} // Safely check if deleteTask is defined
                    onCancel={closeDialog}
                />
            )}
        </div>
    );
};

export default TaskList;