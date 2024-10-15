import { Card, useThemeClassName } from '@fluentui/react-components';

interface MainCardProps {
    children: React.ReactNode;
}

const MainCard: React.FC<MainCardProps> = ({ children }) => {
    const themeClassName = useThemeClassName();
    return (
        <Card className={`list-card ${themeClassName}`}> 

            {/* Card Content */}
            <div>
                {children}
            </div>
        </Card>
    );
};

export default MainCard;