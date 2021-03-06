import CardContainer from '../UI/CardContainer';
import Card from './Card';
import classes from './ModuleList.css';

export function ModuleList(props) {
    return (
        <CardContainer className={classes.list}>
            {
                props.modules.map(module => 
                    <Card 
                        key={module.ModuleID} 
                        module = {module}
                        handlers = {props.handlers}
                    />
                )
            }
        </CardContainer>
    );
}




export default ModuleList;