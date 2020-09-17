import React from "react";
import { Form } from "semantic-ui-react";

class GameForm extends React.Component {
state = { 
    title: "",
    desc: ""};
    componentDidMount() {
        this.setState({
            title: this.props.title,
            desc: this.props.desc,
        })
    }
    


handleAddGameInProgress = (e) =>
    if (this.props.editHandler({ ... this.state, id: this.props.id })
    )


}