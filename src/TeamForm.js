import React from "react";
 import { Form, } from "semantic-ui-react";

 class TeamForm extends React.Component {
   state = { name: "", phrase: "", };

   handleSubmit = (e) => {
     e.preventDefault();
     this.props.add(this.state);
     this.setState({ title: "", body: "", });
   }

   handleChange = (e) => {
     this.setState({ [e.target.name]: e.target.value, });
   }

   render() {
     return(
       <Form onSubmit={this.handleSubmit}>
         <Form.Group widths="equal">
           <Form.Input 
             placeholder="Title Placeholder"
             label="Name"
             name="name"
             onChange={this.handleChange}
             value={this.state.name}
           />
           <Form.Input
             placeholder="Body Placeholder"
             label="Phrase"
             name="phrase"
             onChange={this.handleChange}
             value={this.state.phrase}
           />
           <Form.Button color="green">Create</Form.Button>
         </Form.Group>
       </Form>
     )
   }
 };

 export default TeamForm;