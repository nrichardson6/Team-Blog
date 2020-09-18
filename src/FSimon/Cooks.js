import React, {useState} from "react";


const Cooks = () => {

  const [cooks,setCooks] = useState([
    { name:"Mr.Cook", phrase:"Don't Spoil the broth Dear"},
    { name:"Mrs.Cook", phrase:"Family is like a Soup" },
  ]);
  const [showCooks,setShowCooks] = useState(true);







//CANNOT USE CONST HERE
function renderCooks (){
  return cooks.map(cook=> {
    return(
      <div>
        <h2>{cook.name}</h2><h3>Catch Phrase: {cook.phrase}</h3>
        <br />
      </div>
    )

});
};

  return (
    <div>
      <h1>Cooks</h1>
      <br />
      <button onClick={() => setShowCooks(!showCooks)}>Cook Toggler</button>
      <br />
      <br />
      <hr />
      {showCooks && renderCooks()}
    </div>
  );
};

export default Cooks;