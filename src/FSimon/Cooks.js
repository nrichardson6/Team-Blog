import React, {useState} from "react";


const Cooks = () => {

  const [cooks,setCooks] = useState([
    { name:"Mr.Cook", phrase:"Don't Spoil the broth Dear"},
    { name:"Mrs.Cook", phrase:"Family is like a Soup" },
  ]);


function renderCooks (){
  return cooks.map(cook=> {
    return(
      <div>
        {cook.name} Catch Phrase: {cook.phrase}
      </div>
    )

});
};

  return (
    <div>
      <h1>Cooks</h1>
      {renderCooks()}
    </div>
  );
};

export default Cooks;