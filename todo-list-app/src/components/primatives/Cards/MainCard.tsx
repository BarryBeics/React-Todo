import { Card } from '@fluentui/react-components';

interface MainCardProps {
    child: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ child }) => {
    return (
        <Card style={{
            width: '100%',
            margin: '20px',
            padding: '16px'
        }}>

            {/* Card Content */}
            <div>
                {child}
            </div>
        </Card>
    );
};

export default MainCard;