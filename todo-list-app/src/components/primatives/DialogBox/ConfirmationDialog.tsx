import { Dialog, DialogSurface, DialogBody, DialogTitle, DialogContent, DialogActions, Button } from '@fluentui/react-components';

interface ConfirmationDialogProps {
    taskTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ taskTitle, onConfirm, onCancel }) => {
    return (
        <Dialog open>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Delete Task</DialogTitle>
                    <DialogContent>
                        Are you sure you want to delete the task "{taskTitle}"? This action cannot be undone.
                    </DialogContent>
                    <DialogActions>
                        <Button appearance="secondary" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button appearance="primary" onClick={onConfirm}>
                            Confirm
                        </Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};

export default ConfirmationDialog;