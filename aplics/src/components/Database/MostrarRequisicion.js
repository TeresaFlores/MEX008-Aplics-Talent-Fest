import React, { Component } from 'react';
// import Requisiciones from './Requisicion';
import {firebaseConf} from '../Firebase/firebase';


class MostrarRequisicion extends Component {
    state={
        items:[]
    }
    componentDidMount(){
        firebaseConf.database().ref('paramsform').get(params).then(() => {
        // firebaseConf.collection("params").get().then((snapShots)=>{
            this.setState({
                items:paramsform.docs.map(doc =>{
                    console.log(doc.data());
                })
            })
        }) 
    }
   render (){
       return(
           <div>

           </div>
       )
   }
    
}
export default MostrarRequisicion