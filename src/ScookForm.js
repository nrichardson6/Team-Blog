import React from "react";
import { Form, } from "semantic-ui-react";

class CookForm extends React.Component {
  state = { name: "", phrase: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", phrase: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            placeholder="....Dont Spoil the Broth"
            label="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.Input
            placeholder="....Theres too many Cooks"
            label="Phrase"
            name="phrase"
            onChange={this.handleChange}
            value={this.state.phrase}
          />
          <br />
          <br />
          <Form.Button color="green">Spoil the Broth</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

export default CookForm;