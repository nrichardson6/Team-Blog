import React from "react";
import { Header, Segment,Button } from "semantic-ui-react";

class Cook extends React.Component {
  
  render() {
    const {id,removeCook, editCook} = this.props;
    return (
      <Segment>
        <Header as="h3">{ this.props.name }</Header>
        <p>{ this.props.phrase }</p>
        <Button onClick={() => editCook(id)} color="blue">Edit a Cook</Button>
        <Button onClick={() => removeCook(id)} color="red">Kill a Cook</Button>
      </Segment>
    )
  }
}

export default Cook;