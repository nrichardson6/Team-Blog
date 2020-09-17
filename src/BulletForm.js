import React from "react";
import { Form, Group, Button, } from "semantic-ui-react";

class BulletForm extends React.Component {
  state = { title: "", body: "", };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({ title: "", body: "",});
  }

  handleChange = (event) => {
  //The brackets allow us to set this as a variable for accessing the different elements in the page, or on the display.
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Title"
            label="Title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title} />
          <Form.Input
            placeholder="Body"
            label="Body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body} />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
export default BulletForm;