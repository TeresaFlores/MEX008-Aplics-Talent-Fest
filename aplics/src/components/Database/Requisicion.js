// import React from 'react';
import React, { Component } from 'react';
import {firebaseConf} from '../Firebase/firebase';

class Requisicion extends Component {

    // inicializamos nuestro estado inicial
    constructor(props) {
      super(props);
      this.state = {
        form: [],
        alert: false,
        alertData: {}
      };
    }
  
    // Mostrar una alerta cuando se envia el formulario
    showAlert(type, message) {
      this.setState({
        alert: true,
        alertData: { type, message }
      });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 4000)
    }
  
    // Con esta funcion borramos todos los elementos del formulario
    resetForm() {
      this.refs.contactForm.reset();
    }
  
    // Funcion para enviar la informacion del formulario a Firebase Database
    sendMessage(e) {
      // Detiene la acción predeterminada del elemento
      e.preventDefault();
      
      // Creamos un objeto con los valores obtenidos de los inputs
      const params = {
        name: this.inputName.value,
        email: this.inputEmail.value,
        city: this.inputCity.value,
        phone: this.inputPhone.value,
        message: this.textAreaMessage.value
      };
      
      // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
      if (params.name && params.email && params.phone && params.phone && params.message) {
        // enviamos nuestro objeto "params" a firebase database
        console.log(firebaseConf.auth().currentUser)
        firebaseConf.database().ref('params7form').push(params).then(() => {
          // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
          this.showAlert('success', 'Your message was sent successfull');
        }).catch((e) => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
          console.error(e);
          this.showAlert('danger', 'Your message could not be sent');
        });
        // limpiamos nuestro formulario llamando la funcion resetform
        this.resetForm();
      } else {
        // En caso de no llenar los elementos necesario despliega un mensaje de alerta
        this.showAlert('warning', 'Please fill the form');
      };
    }
  


    
    render() {
      return (
        <h1>hola</h1>
      );
    }
  }
  
  export default Requisicion;