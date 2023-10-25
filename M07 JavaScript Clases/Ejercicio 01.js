/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

   // USANDO LA NOTACION DE CLASE
   // class Usuario { 
   //    constructor(usuario, nombre, email, password) {
   //       this.usuario = usuario;
   //       this.nombre = nombre;
   //       this.email = email;
   //       this.password = password
   //    }

   //    saludar() {
   //       return ("Hola, mi nombre es " + this.nombre)
   //    }
   // }

   // // let ejUsuario = new Usuario("mauri", "Mauricio", "ucsamme@hotmail.com", "añsldiwndk");

   // return Usuario;

   // USANDO LA NOTACION FUNCIONAL
   function Usuario(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password

      // defino aqui el metodo para que quede visible a todas las instancias (ocupando memoria)
      // this.saludar = function () {
      //    return ("Hola, mi nombre es " + this.nombre)
      // }
   }
   
   // defino el metodo con el prototype para hacer mejor uso de la memoria,
   // quedando oculto pero accesible desde las instancias
   Usuario.prototype.saludar = function () {
         return ("Hola, mi nombre es " + this.nombre)
      }


// PROBANDO LAS FUNCIONES CON QUOKKA 
   // const persona1 = new Usuario("mauri", "ajedrez");

   // console.log(persona1.nombre);

   // console.log(persona1.saludar());

   return Usuario;

}
// PROBANDO LAS FUNCIONES CON QUOKKA 
   // crearUsuario();


function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:

   Usuario.prototype.saludar = function () {
      return ("Hello World!")
   }

}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".

   String.prototype.reverse = function () {

      // var cadenaInv = ""

      // for (let i = 0; i < this.length; i++) {
      //    const letra = this[i];
      //    cadenaInv = letra + cadenaInv
      // }

      // return cadenaInv

      // OTRA FORMA CON ARRAYS, ya que estos si tienen el metodo reverse.
      // paso el string a un array, luego lo doy vuelta y finalmente lo paso a string nuevamente.
      return this.split("").reverse().join("");

   }

   

   // PROBANDO CON QUOKKA
      // var str1 = "Hola";
      // var str2 = new String("Hola");
      // console.log(str1);
      // console.log(str2.reverse());
}

// agregarStringInvertida();


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
