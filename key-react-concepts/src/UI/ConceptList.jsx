import Concept from "./Concept";
import Card from "../Card/Card";

function ConceptList(props) {

    const classes = "concepts";

    return(
        <Card className={classes} id="concepts">
            <Concept data={props.concepts[0]}></Concept>
            <Concept data={props.concepts[1]}></Concept>
            <Concept data={props.concepts[2]}></Concept>
        </Card>
    )
}

export default ConceptList;