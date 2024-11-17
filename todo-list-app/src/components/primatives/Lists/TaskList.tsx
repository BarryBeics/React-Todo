import { Subtitle2, Body1, useThemeClassName } from '@fluentui/react-components';
import { CheckmarkCircle24Filled, Delete24Filled } from '@fluentui/react-icons';
import type { Business } from '../../../types/Business';
import BusinessCard from '../../primatives/Cards/BusinessCard';
import ConfirmationDialog from '../DialogBox/ConfirmationDialog';
import useActionDialog from '../../../hooks/useActionDialog';
import IconButton from '../../primatives/Buttons/IconButton';
import Grid from '../../primatives/Grid/Grid';
import undrawTodoList from '../../../assets/undraw_to_do_list.svg';
import './Lists.css'; 

interface TaskListProps {
    tasks: Business[];
    markAsComplete: (taskId: string) => void;
    deleteTask?: (taskId: string) => void; // Optional, as completed tasks don't need deletion
    showCompleted: boolean;  // Filter for completed or incomplete tasks
    checkmarkColour: string;  // Customize the colour of the checkmark
    showDeleteButton?: boolean;  // Optionally show or hide delete button
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    markAsComplete,
    deleteTask,
    showCompleted,
    checkmarkColour,
    showDeleteButton = true,
}) => {
    const { isDialogOpen, selectedTask, openDialog, closeDialog, confirmAction } = useActionDialog();
    const themeClassName = useThemeClassName();

    return (
        <Grid className={themeClassName}>
            {tasks
                .filter(task => task.completed === showCompleted)
                .map(task => (
                    <BusinessCard
                        key={task.id}
                        title={<Subtitle2>{task.title}</Subtitle2>} // Use Subtitle2 for consistent styling        
                        svgSrc={undrawTodoList}
                        svgAlt='To Do List'
                        // Wrap multiple elements with a fragment
                        turnover={
                            <>
                                <Subtitle2>Turnover:</Subtitle2> 
                                <Body1>{task.turnover}</Body1>
                            </>
                        }
                        leasehold={
                            <>
                                <Subtitle2>Leasehold:</Subtitle2> 
                                <Body1>{task.leasehold}</Body1>
                            </>
                        }
                        footerContent={
                            <div className="task-buttons">
                                {/* Mark as Complete Button */}
                                <IconButton
                                    icon={<CheckmarkCircle24Filled />}
                                    onClick={() => markAsComplete(task.id)}
                                    color={checkmarkColour}
                                    appearance="transparent"
                                    title="Mark as Complete"
                                    ariaLabel="Mark as Complete"
                                    label="Complete"
                                />

                                {/* Delete Button (if enabled) */}
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
                        }
                    >
                        {/* Task Description */}
                        {task.description && <Body1>{task.description}</Body1>}
                    </BusinessCard>
                ))}

            {/* Confirmation Dialog */}
            {isDialogOpen && selectedTask && (
                <ConfirmationDialog
                    taskTitle={selectedTask.title}
                    onConfirm={() => deleteTask && confirmAction(deleteTask)}
                    onCancel={closeDialog}
                />
            )}
        </Grid>
    );
};

export default TaskList;