import { Card, CardPreview, Subtitle2 } from '@fluentui/react-components';

interface ListCardProps {
    title: string;
    svgSrc: string;
    svgAlt: string;
    children: React.ReactNode;
}

const ListCard: React.FC<ListCardProps> = ({ title, svgSrc, svgAlt, children }) => {
    return (
        <Card style={{
            width: '100%',
            margin: '20px',
            padding: '16px'
        }}>

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