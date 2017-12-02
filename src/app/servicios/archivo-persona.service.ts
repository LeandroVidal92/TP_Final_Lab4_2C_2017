import { Injectable } from '@angular/core';
import {MiHttpService} from './mi-http.service';
import { Usuario } from '../Clases/Usuario';
var path = "http://localhost:8080/ApiFinalLV/Api/index.php/";
@Injectable()
export class ArchivoPersonaService {

  constructor(public mihttp:MiHttpService) { }

  public APIGet(Ruta:string) 
  {
   return this.mihttp.dameunapromesa(path + Ruta )
    .then(datos =>datos)
    .catch(e=>e);
  }

  public APIPostJWT(Ruta:string,username:string,password:string, callback: (token: string) => void) 
  { 
   var rta =  this.mihttp.postjwt(path + Ruta ,username,password, data => { 
      var token = JSON.parse(data.text()).token;
      callback(token);
    }); 
  }

  public  APIRegistrar(Ruta:string,unUser:Usuario, callback: (mensaje: string) => void) 
  { 
   var rta =  this.mihttp.PostRegistrar(path + Ruta ,unUser, data => { 
      var mensaje = JSON.parse(data.text()).mensaje;
      callback(mensaje);
    }); 
  }

  public APIReservar(Ruta:string,fecha:string, callback: (mensaje: string) => void)
  { 
    var rta =  this.mihttp.PostReservar(path + Ruta ,fecha, data => { 
       var mensaje = JSON.parse(data.text()).mensaje;
       callback(mensaje);
     }); 
   }
  

}