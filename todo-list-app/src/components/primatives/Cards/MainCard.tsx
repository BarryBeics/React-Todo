import { Card, useThemeClassName } from '@fluentui/react-components';

interface MainCardProps {
    children: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
    const themeClass = useThemeClassName();
    return (
        <Card className={`list-card ${themeClass}`}> 

            {/* Card Content */}
            <div>
                {children}
            </div>
        </Card>
    );
};

export default MainCard;