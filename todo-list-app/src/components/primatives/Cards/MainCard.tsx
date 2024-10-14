import { Card } from '@fluentui/react-components';

interface MainCardProps {
    children: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
    return (
        <Card style={{
            margin: '20px',
            padding: '16px'
        }}>

            {/* Card Content */}
            <div>
                {children}
            </div>
        </Card>
    );
};

export default MainCard;