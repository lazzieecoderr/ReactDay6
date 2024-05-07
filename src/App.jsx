import React from 'react';
import Api from './Components/Api';
import CompA from './Components/PropsDrilling/CompA';


const App = () => {
  let a =10
  return (
    <div>
       <h1>Hello World!</h1>
       <h2>The value of a :{a}</h2>
       {/* <Api /> */}
       <CompA a={a} />
      
       
     
    </div>
  );
};

export default App;