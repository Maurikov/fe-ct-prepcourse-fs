// Leccion 54 de 99. Prototipos y Herencias
// var array = [5,2,8,1,9];

// array.prototype.mayoresquetres = function () {
//     var arregloModificado = [ ];

//     for (let i = 0; i < this.length; i++) {

//         if (this[i] > 3) {
//             arregloModificado.push(false)
//         } else {
//             arregloModificado.push(this[i])
//         }
//     }

//     return arregloModificado;
// };

// var arreglo = [1,2,3,4,5];

// var nuevoarreglo = arreglo.mayoresquetres();

// console.log(nuevoarreglo); 	// [1,2,3,false,false]


var   // con let no me deja definir el objeto
      objeto_gato = {
         nombre: "mauri",
         edad: 48,
         meow: () => {
            return "Meow!"
         }
      }

console.log(objeto_gato);

console.log(objeto_gato.nombre);

console.log(typeof objeto_gato)   