/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   // return array[0]
   return array.shift()
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   // return array[array.length - 1]
   return array.pop()
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arrayMasUno = array.map( (num) => { return num + 1 } );
   return arrayMasUno
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   // return array.push(elemento); not found
   array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   let
      frase = '',
      primero = true;

   palabras.forEach(element => {
      if (primero) {
         frase = element;
         primero = false;
      } 
      else {
         frase = frase + ' ' + element
      }
   });

   return frase

   // let string = palabras.join(' '); ok
   // return string

   // return string = palabras.join(' '); ok
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   let existe = false;

   array.forEach(element => {
      if (element === elemento) {
         // return true # not found
         existe = true;
      }
   });

   // return false;  # not found
   return existe;

   // return array.includes(elemento)  # ok
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   arrayOfNums.forEach(element => {
      suma = suma + element
   });
   return suma
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;

   resultadosTest.forEach(element => {
      suma = suma + element
   });

   return promedio = suma / resultadosTest.length

   // var suma = 0;
   // for (const iterator of resultadosTest) {
   //    suma = suma + iterator
   // }
   // return promedio = suma / resultadosTest.length
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var masGrande = arrayOfNums[0];

   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > masGrande) {
         masGrande = arrayOfNums[i]
      }
   }
   return masGrande
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   let
    cant_args = arguments.length,
    producto = 1; 

  if (cant_args === 0) {
    return 0;
  } 
  else if (cant_args === 1) {
    return arguments[0];
  }

  for (let i = 0; i < cant_args; i++) {
    producto = producto * arguments[i];
  }

  return producto;

// NOT FOUND - REVISAR PORQUE
   // let
   //    cerounargumento = false,
   //    producto = 1;
      
   // if (multiplicarArgumentos.length === 0) {
   //    // return 0
   //    cerounargumento = true
   // } 
   // else if (multiplicarArgumentos.length === 1) {
   //    // return arguments
   //    cerounargumento = arguments[0]
   // }
   // else {
   //    arguments.forEach(element => {
   //       producto = producto * element
   //    });

   //    return producto
   // }

   // if (cerounargumento) {
   //    return 0
   // } else {
   //    return cerounargumento
   // }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   
   var cant = 0;

   array.forEach(element => {
      if (element > 18) {
         cant = cant + 1
      }   
   });

   return cant
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana"
   }
   
   return "Es dia laboral"
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var
      string = num.toString(); // ,
      
      // array = string.split('');

   // return array[0] === '9'

   return string[0] === '9'
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true?
   // Caso contrario retornar false.
   // Tu código:

   let iguales = true;

   array.forEach(element => {
      if (element !== array[1]) {
         iguales = false
      }
   });

   return iguales // ok

   // let iguales = false;
   // iguales = array.every((num) => {num === array[1]});
   // return iguales # not found

   // array.forEach(element => {
   //    return array.every((num) => {num === element}) # not found
   // })

   // return array.every((num) => {num === array[1]}) # not found
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   // CODIGO OK
   let nuevoarray = [];

   array.forEach(mes => {
      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
         nuevoarray.push(mes)
      }
   });

   if (nuevoarray.length < 3) {
      return "No se encontraron los meses pedidos"
   }
   else {
      return nuevoarray //# ok
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   let
      tablaDelSeis = [];

   for (let i = 0; i <= 10; i++) {
      // document.write(6 * i);
      // console.log(6 * i);
      tablaDelSeis[i] = 6 * i;
   }

   return tablaDelSeis
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   let newarray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      newarray.push(array[i]);
    }
  }
  return newarray;

//   NOT FOUND  - REVISAR PORQUE
   // let nuevoarray = array.map( (nro) => { if (nro > 100) return nro});

   // return nuevoarray 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let 
    bandera = false,
    array = [];

  for (let i = 0; i < 10; i++) {
    num = num + 2;
    array[i] = num;
    if (num === i) {
      bandera = true;
      break;
    }
  }

  if (bandera) {
    return "Se interrumpió la ejecución"
  }
  else {
    return array;
  }

// NOT FOUND - REVISAR PORQUE
   // let
   //    limite = 0,
   //    bandera = 0,
   //    arreglo = [];

   // do {
   //    num = num + 2;
   //    arreglo[limite] = num;
   //    limite = limite + 1;
   //    if (num === limite) {
         
   //       bandera = 1;
   //       break;
   //    }
   // } while (limite < 10);
   
   // if (bandera = 1) {
   //    return "Se interrumpio la ejecucion";
   // }
   // return arreglo
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   let 
    array = [];

  for (let i = 0; i < 10; i++) {
    if ( i === 5) {
      continue;
    }
    else {
      num = num + 2;
      array.push(num)
    }
  }
    return array;

   // NOT FOUND - REVISAR PORQUE 
   // let
   //    limite = -1,
   //    arreglo = [];

   // do {
   //    limite = limite + 1;
   //    if (limite !== 4) {
   //       num = num + 2;
   //       arreglo[limite] = num;
   //    } else {
   //       continue;
   //    }
   // } while (limite < 9);

   // return arreglo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
