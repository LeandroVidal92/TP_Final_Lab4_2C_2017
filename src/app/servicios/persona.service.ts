import { Injectable } from '@angular/core';
import {ArchivoPersonaService} from './archivo-persona.service';
import { Usuario } from '../Clases/Usuario';
@Injectable()
export class PersonaService {

  constructor(private AP:ArchivoPersonaService) { }


  TraerDatos()
  {
   return this.AP.APIGet("persona/")
   .then(lista=>lista)
   .catch(e=>e);
  }

  GenerarToken(username:string,password:string, callback: (token: string) => void)
  {
   
      this.AP.APIPostJWT("ingreso/",username,password, token => { 
      callback(token);
    });
   
   

    // .then(jwt=>jwt)
    // .catch(e=>e);
  }
  Registrar(unUser:Usuario, callback: (mensaje: string) => void)
  {
   
      this.AP.APIRegistrar("Usuario/",unUser, mensaje => { 
      callback(mensaje);
    });
   
  }

  Reservar(fecha:string, callback: (mensaje: string) => void)
  {

    this.AP.APIReservar("Accion/",fecha, mensaje => { 
      callback(mensaje);
    });
   
  }
}
