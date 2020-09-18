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
    
// TODO #2 clear the form. 

handleSubmitGameForm = (e) => {
    if (this.props.id) {
      console.log('this.state :>> ', this.state);
        this.props.editHandler({ ...this.state, id: this.props.id })
        this.props.toggleEditforExistingGame();
        console.log('this.props :>> ', this.props);
        return;
}
this.props.addHandler(this.state);


}

handleFormInProgress = (e) => {
    console.log('Function called') 
    this.setState({
        [e.target.name]: e.target.value,
        // (need to ask teacher about above function)
    }
    )
}


render () {
    return (
        <Form onSubmit={this.handleSubmitGameForm}>
            <Form.Group width="equals">
                <Form.Input
                    placeholder="Game Title"
                    label="Title"
                    name="title"
                    onChange={this.handleFormInProgress}
                    value={this.state.title}
                    />
                <Form.Input
                    placeholder="Game Description"
                    label="Description"
                    name="desc"
                    onChange={this.handleFormInProgress}
                    value={this.state.desc}
                    />
                    <Form.Button color="orange">Submit</Form.Button>
            </Form.Group>
        </Form>
    )
}
}

export default GameForm;