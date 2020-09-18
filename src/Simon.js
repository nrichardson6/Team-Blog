
import React from "react";
import { Header, } from "semantic-ui-react";
import Cook from "./Scook"
import CookForm from "./ScookForm"

class Simon extends React.Component {
  state = {
    cooks: [
      { id: 1, name: "Cooks", phrase: "Too many Cooks its True" },
      { id: 2, name: "Kooks", phrase: "Fill our Heart with Love" },
      { id: 3, name: "Cook", phrase: "Family is like a soup" },
    ]
  };


  addCook = (cook) => {
    const newCook = { ...cook, id: Math.random() + "" };
    this.setState({
      cooks: [...this.state.cooks, newCook],
    });
  };

  removeCook = (cId)=>{
    const filteredCook = this.state.cooks.filter((c) => c.id !== cId);
    this.setState({
      cooks: filteredCook,
    })
  }


  
  
  renderCooks = () => {
    return this.state.cooks.map((c) =>(
    <Cook key={c.id} 
    {...c} 
    
    removeCook={this.removeCook}
    
    />));
  };
  

  //Need to ask teacher about this part. 



  render() {
    return (
      <div className="cooks">
        <Header  className="spoil" as="h1">It takes ALOT to make a Stew.....</Header>
        <CookForm add={this.addCook}/>
        { this.renderCooks() }
      </div>
    )
  }
}

export default Simon;