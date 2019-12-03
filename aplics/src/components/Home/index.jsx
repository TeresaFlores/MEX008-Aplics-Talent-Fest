import React from 'react';
import Requisicion from '../Database/Requisicion';
import MostrarRequisiciones from '../Database/MostrarRequisicion';


const Account = () => (
  <div>
    <h1>Home</h1>
 <Requisicion />

 <MostrarRequisiciones/>
    
  </div>
);

export default Account;