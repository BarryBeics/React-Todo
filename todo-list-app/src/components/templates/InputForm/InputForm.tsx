import { Field, Input, useThemeClassName } from '@fluentui/react-components';
import { AddCircle24Filled } from '@fluentui/react-icons';
import SectionCard from '../../primatives/Cards/SectionCard';
import undrawAddTask from '../../../assets/undraw_add_tasks.svg';
import Button from '../../primatives/Buttons/Button';
import Stack from '../../primatives/Stack/Stack';
import './InputForm.css';

interface InputFormProps {
    newTask: { title: string; 
            turnover: string;   
           leasehold: string; 
         description: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
    handleAddTask: () => void;
    error: string | null;
}

const InputForm: React.FC<InputFormProps> = ({ newTask, handleInputChange, handleAddTask, error }) => {
    const themeClassName = useThemeClassName();

    return (
        <SectionCard 
            title="Add Task"
            svgSrc={undrawAddTask} 
            svgAlt='Add Task'
            footerContent={
                <Button
                    onClick={handleAddTask}
                    appearance="primary"
                    icon={<AddCircle24Filled />}
                    label="Add Task"              
                />
            }
        >
            <Stack>
                {/* Task Title Field with Validation */}
                <Field
                    label="Task Title"
                    validationMessage={error}  // Validation message shown on error
                    required  // Adds required field indicator
                >
                    <Input
                        placeholder="Enter a task title..."
                        name="title"
                        value={newTask.title}
                        onChange={(e) => handleInputChange(e, 'title')}
                        className={`fui-Input ${themeClassName} ${error ? 'input-error' : ''}`}
                    />
                </Field>
                
                {/* Optional Task Turnover price Input */}
                <Field>
                    <Input
                        placeholder="Enter an optional task description..."
                        name="turnover"
                        value={newTask.turnover}
                        onChange={(e) => handleInputChange(e, 'description')}
                        className={`fui-Input ${themeClassName}`}
                        />
                </Field>

                {/* Optional Task Leasehold price Input */}
                <Field>
                    <Input
                        placeholder="Enter an optional task description..."
                        name="leasehold"
                        value={newTask.leasehold}
                        onChange={(e) => handleInputChange(e, 'description')}
                        className={`fui-Input ${themeClassName}`}
                        />
                </Field>

                {/* Optional Task Description Input */}
                <Field>
                    <Input
                        placeholder="Enter an optional task description..."
                        name="description"
                        value={newTask.description}
                        onChange={(e) => handleInputChange(e, 'description')}
                        className={`fui-Input ${themeClassName}`}
                        />
                </Field>
                </Stack>
        </SectionCard>
    );
};

export default InputForm;