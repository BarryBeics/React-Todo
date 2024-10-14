import { Card, CardPreview, Subtitle2, useThemeClassName } from '@fluentui/react-components';

interface ListCardProps {
    title: string;
    svgSrc: string;
    svgAlt: string;
    children: React.ReactNode;
}

const ListCard: React.FC<ListCardProps> = ({ title, svgSrc, svgAlt, children }) => {
    const themeClassName = useThemeClassName();
    return (
        <Card className={`list-card ${themeClassName}`}> 

            <Subtitle2>
                {title}
            </Subtitle2>
            <CardPreview>
                <img 
                src={svgSrc}
                alt={svgAlt}
                style={{
                    width: '40%',
                    height: 'auto',
                    padding: '16px',
                    margin: 'auto'
                }}
                />
            </CardPreview>

            {/* Card Content */}
            <div>
                {children}
            </div>
        </Card>
    );
};

export default ListCard;