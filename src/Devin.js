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

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000)
    .toString(16)
    .substring(1);
  };

  addBullet = (bulletData) => {
    const { bullets, } = this.state;
    const bullet = { id: this.getId(), ...bulletData, };
    this.setState({ bullets: [bullet, ...bullets], });
  };

  renderBullets = () => {
    return this.state.bullets.map( bullet => <Bullet key={bullet.id} {...bullet} />)
  };

  render() {
    return (
      <div>
        <Header as="h1">Devin's Interests</Header>
        <BulletForm add={this.addBullet} />
        { this.renderBullets() }
      </div>
    )
  }

}


export default Interest;