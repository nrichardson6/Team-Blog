import React from "react";
import { Header, Segment, Button, Icon, } from "semantic-ui-react";
import BulletForm from "./BulletForm";


class Bullet extends React.Component {
  state = { editing: false,}; // Editing will apply a form function to the already declared bullet title and body. this will allow for updating.

  toggleEdit = () => this.setState({
    editing: !this.state.editing, // this changes the default "false" state of editing to true
  });



  render() {
    return (
      <Segment style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {
        this.state.editing ?  <BulletForm { ...this.props } />  
        : <div><Header as="h3">{this.props.title}</Header></div>
      }
      <div>
        <Button icon color="blue" onClick={this.toggleEdit}>
          <Icon name="pencil" />
        </Button>
        <Button icon color="blue" onClick={this.toggleEdit}>
          <Icon name="trash" />
        </Button>
      </div>
        <Header as="h3">{ this.props.title }</Header>
        <p>{ this.props.body }</p>
      </Segment>
    )
  }
}

export default Bullet;