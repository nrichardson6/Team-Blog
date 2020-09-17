
import React from "react";
import { Header, } from "semantic-ui-react";
import Cook from "./Scook"

class Simon extends React.Component {
  state = {
    cooks: [
      { id: 1, name: "Cooks", phrase: "Too many Cooks" },
      { id: 2, name: "Kooks", phrase: "Dont spoil the broth" },
      { id: 3, name: "Cook", phrase: "Family is like a soup" },
    ]
  };

  
  renderCooks = () => {
    return this.state.cooks.map( cook => <Cook key={cook.id} {...cook} />)
  };
  
  render() {
    return (
      <div>
        <Header as="h1">It takes alot to make a Stew.....</Header>
        { this.renderCooks() }
      </div>
    )
  }
}

export default Simon;