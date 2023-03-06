import './Card.css'

const Card = (props) => {
    //this allows for child uses of this component's classes to take effect on the Card component where it is being used
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;