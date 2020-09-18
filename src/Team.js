import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";

 class Team extends React.Component {
   render() {
     const {id, remove } = this.props
     return (
       <Segment>
         <Header as="h3">{ this.props.name }</Header>
         <p>{ this.props.team }</p>
         <Button onClick={() => remove(id)} color="blue">Delete</Button>
       </Segment>
     )
   }
 }

 export default Team; 