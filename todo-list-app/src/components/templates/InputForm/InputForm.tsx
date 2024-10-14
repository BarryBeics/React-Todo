import { Input, Text } from '@fluentui/react-components';
import { AddCircle24Filled } from '@fluentui/react-icons';
import SectionCard from '../../primatives/Cards/SectionCard';
import undrawAddTask from '../../../assets/undraw_add_tasks.svg';
import { Button } from '../../primatives/Buttons';

interface InputFormProps {
    newTask: { title: string; description: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
    handleAddTask: () => void;
    error: string | null;
}

const InputForm: React.FC<InputFormProps> = ({ newTask, handleInputChange, handleAddTask, error }) => {

    return (
        <SectionCard 
        title="Add Task"
        svgSrc={undrawAddTask} 
        svgAlt='Add Task' 
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Required Task Title Input */}
                <Input
                    type="text"
                    placeholder="Enter a task title..."
                    value={newTask.title}
                    onChange={(e) => handleInputChange(e, 'title')}
                    style={{ 
                        width: '100%', 
                        borderColor: error ? 'red' : '' 
                    }} // Red border if there's an error
                />
                
                {/* Optional Task Description Input */}
                <Input
                    type="text"
                    placeholder="Enter an optional task description..."
                    value={newTask.description}
                    onChange={(e) => handleInputChange(e, 'description')}
                    style={{ width: '100%' }}
                />
                
                {/* Error Message */}
                {error && <Text style={{ color: 'red' }}>{error}</Text>} 
                
                <Button
                    appearance='primary'
                    icon={<AddCircle24Filled />}
                    onClick={handleAddTask}
                    label='Add Task'        
                />
            </div>

        </SectionCard>
    );
};

export default InputForm;