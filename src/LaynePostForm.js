import React from "react";
import { Form } from "semantic-ui-react";


class PostForm extends React.Component {

  state = { title: "", body: ""};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    
    this.props.addNewPost(this.state);
  }




  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input 
              placeholder="Title"
              required
              label="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              />
            <Form.Input 
              placeholder="Body"
              required
              label="Body"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              />
          </Form.Group>
        <Form.Button>Add New Post</Form.Button>
      </Form>
    );
  };


};

export default PostForm;
