function Card(props) {
    const classes = props.className;

    return <div id="concepts" className={classes}>{props.children}</div>
}

export default Card;