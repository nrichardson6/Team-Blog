import React from 'react';
import { Header } from "semantic-ui-react";
import Bullet from "./Bullet";
import BulletForm from "./BulletForm";




class Interest extends React.Component {

  state = {
    bullets: [
      {id: 1, title: "Video Games", body: "Video games are great, especially competitive ones."},
      {id: 2, title: "Reading", body: "I like to read, fantasy, political, sci-fi, etc."},
      {id: 3, title: "Fieldcraft", body: "Doing what's necessary in order to survive, especially in the wild."},
    ]
  };

  renderBullets = () => {
    return this.state.bullets.map( bullet => <Bullet key={bullet.id} {...bullet} />)
  };

  render() {
    return (
      <div>
        <Header as="h1">Devin's Interests</Header>
        <BulletForm />
        { this.renderBullets() }
      </div>
    )
  }

}


export default Interest;