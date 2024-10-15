import { Card, CardPreview, Subtitle2, CardFooter, useThemeClassName, makeStyles, tokens } from '@fluentui/react-components';
import './Cards.css';

const useStyles = makeStyles({
    previewBg: {
        backgroundColor: tokens.colorNeutralBackground2, 
    },
});


interface ListCardProps {
    title: string;
    svgSrc: string;
    svgAlt: string;
    children: React.ReactNode;
    footerContent?: React.ReactNode;
}

const ListCard: React.FC<ListCardProps> = ({ title, svgSrc, svgAlt, children, footerContent }) => {
  const classes = useStyles();
  const themeClassName = useThemeClassName();



    return (
        <Card className={`list-card ${themeClassName}` }>  {/* Apply dynamic class here */}
            <Subtitle2 className='subtitle-spacing'>
                {title}
            </Subtitle2>
            <CardPreview className={`${classes.previewBg}`}>
                <img 
                src={svgSrc}
                alt={svgAlt}
                className='list-card-image'
                />
            </CardPreview>

            {/* Card Content */}
            <div>
                {children}
            </div>

            {/* Optional Footer */}
            {footerContent && (
                <CardFooter className='card-footer'>
                    {footerContent}
                </CardFooter>
            )}
        </Card>
    );
};

export default ListCard;