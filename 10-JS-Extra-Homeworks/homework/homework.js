// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let arreglo = [];
  for (let prop in objeto) // recorre el objeto
    {
      arreglo.push([prop,objeto[prop]]); // arma array
    }
    return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
let cantLetras = {};

for (let i = 0; i < string.length; i++) // primera letra
  {
    let cont = 0; // cantidad de caracteres
    if(!cantLetras[string[i]])  // Para ver que el caracter NO existe
    {
    for (let j = 0; j < string.length; j++)  // Recorre el string
    {
      if(string[i] === string[j])  //compara caractres
      {
        cont ++;
      }
    }
    cantLetras[string[i]] = cont;  // a la clave dar el valor "cont" 
  }
  }
return cantLetras;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let stringMinus = "";
let stringMayus = "";


for (let i = 0; i < s.length; i++) // primera letra
{
  if(s[i] === s[i].toUpperCase())    // Pasa el caracter a mayuscula y lo compara con la posición
  {
    stringMayus = stringMayus + s[i];
  }else stringMinus = stringMinus + s[i];
}
return stringMayus + stringMinus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let palabra = "";
  let palabraInv = "";
  let frase = "";

  for (let i = 0; i <= str.length; i++)   // recorre la frase
  {
    if (str[i] === " " || i === str.length)  // si encuentra un espacio o termina la frese -> Invierte la frase
    {
      palabraInv = "";
      for (let j = palabra.length - 1; j >= 0; j--) // recorre palabra de atras para adelante menos el espacio
      {
        palabraInv = palabraInv + palabra[j];   // arma la palabra al reves
        
      }
      palabra = "";
      if (i === str.length)         // arma la frase Pregunta si ya recorrio toda la frase
      {
        frase = frase + palabraInv; // si recorrio toda la frase NO agrega el espacio

      }else {frase = frase + palabraInv + " ";} // si NO recorrio toda la frase agrega el espacio
    
    }else {palabra = palabra + str[i];}  // si no hay espacio arma la palabra a dar vuelta
  }
return frase;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

let strNum = numero.toString();  // convierte el numero en string
let arrayNum = strNum.split("");  // convierte el string en un arreglo 
let inverso = arrayNum.reverse();  // es una arreglo que lo invertimos

if(strNum === inverso.join("")) //Une las partes del array en una cadena de caracteres Compara dos string
{
  return "Es capicua";
} else return "No es capicua";

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
let nuevaCadena = "";

 for(let i = 0; i < cadena.length; i++) // Recorre la cadena
  {
    if(cadena[i] != "a" && cadena[i] != "A" && cadena[i] != "b" && cadena[i] != "B" && cadena[i] != "c" && cadena[i] != "C")
    {
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  for (let i = 0; i < arr.length; i++)    // recorre el arreglo desde posicion cero
  {
    for (let j = i + 1; j < arr.length; j++)  // recorre el arreglo desde posicion cero + uno
    {
      if(arr[i].length > arr[j].length)   // Si la lonhitud de la palabra anterior es mayor a la log de la palabra siguiente
      {
        let aux = arr[i];                  // Intercambia posiciones
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
let inter = [];

for (let i = 0; i < arreglo1.length; i++)
{
  for(let j = 0; j < arreglo2.length; j++ )
  {
    if (arreglo1[i] === arreglo2[j])
      {
        inter.push(arreglo1[i]);
      }
  }
}
return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

