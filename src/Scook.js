import React from "react";
import { Header, Segment, } from "semantic-ui-react";

class Cook extends React.Component {
  render() {
    return (
      <Segment>
        <Header as="h3">{ this.props.name }</Header>
        <p>{ this.props.phrase }</p>
      </Segment>
    )
  }
}

export default Cook;