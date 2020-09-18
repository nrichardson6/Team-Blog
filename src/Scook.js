import React from "react";
import { Header, Segment,Button } from "semantic-ui-react";

class Cook extends React.Component {
  
  render() {
    const {id,remove} = this.props;
    return (
      <Segment>
        <Header as="h3">{ this.props.name }</Header>
        <p>{ this.props.phrase }</p>
        <Button onClick={() => remove(id)} color="red">Kill a Cook</Button>
      </Segment>
    )
  }
}

export default Cook;