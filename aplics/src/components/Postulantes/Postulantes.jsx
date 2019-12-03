import React from 'react';
import icono from '../../img/foto.jpg';
import '../Postulantes/Postulantes.css';

// import Textips from '../components/textTips.js';
// import { Link } from 'react-router-dom';
// import next from '../img/next.png';
// import '../styles/Limpieza.css'

class Postulantes extends React.Component{
    render (){
        return (
            <div>
                <h1 className="title">Postulantes</h1>
                <div className="line"></div>
                <div className="Postulantes">
                        
                    <div className="Contenedor">
                        <img className="foto" src={icono}/>
                        <h4>Ventas</h4>
                        <button>Ver más</button>
                    </div>

                    <div className="Contenedor">
                        <img className="foto" src={icono}/>
                        <h4>Sistemas</h4>
                        <button>Ver más</button>
                    </div>

                    <div className="Contenedor">
                        <img className="foto" src={icono}/>
                        <h4>Recepcionista</h4>
                        <button >Ver más</button>
                    </div>
                
                </div>
            </div>
        )
    }

}
export default Postulantes