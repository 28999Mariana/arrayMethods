//.length: propiedad no método(por eso no lleva paréntesis al final). Devuelve la cantidad de elementos del array.
const miArray = ["manzana", "banana", "cereza"];
const longitud = miArray.length;

console.log(longitud); // se imprimirá 3 enconsola


//.push: método que agrega 1 o + elementos al final del array
const miArray2 = ["manzana", "banana", "cereza"];
miArray.push("uva");

console.log(miArray2); // se imprimirá ["manzana", "banana", "cereza", "uva"] en consola



//.unshift: método que agrega 1 o + elementos al principio del array
const miArray3 = ["manzana", "banana", "cereza"];
miArray.unshift("naranja");

console.log(miArray3); // se imprimirá ["naranja", "manzana", "banana", "cereza"] en consola



//.pop: método que elimina el último elememto del array y lo devuelve
const miArray4 = [1, 2, 3];
const elementoEliminado = miArray4.pop();

console.log(miArray4); // imprimirá [1, 2] en consola
console.log(elementoEliminado); // imprimirá 3 en consola



//.shift: elimina el 1er elemento y lo devuelve
const miArray5 = [1, 2, 3];
const elementoEliminado2 = miArray5.shift();

console.log(miArray5); // Esto imprimirá [2, 3] en consola
console.log(elementoEliminado2); // Esto imprimirá 1 en consola


//.at (cambié el metodo .at para acceder a un dato del array)
const miArray6 = [1, 2, 3];
const elementoEnPosicionDos = miArray6[2];

console.log(elementoEnPosicionDos); // se imprimirá 3 en consola


//.indexOf: busco el índice del elemento 3 en el array. Como el elemento 3 se encuentra en la posición 2 (los índices empiezan desde 0), el resultado es 2.
const miArray7 = [1, 2, 3];
const indiceDelElemento = miArray7.indexOf(3);

console.log(indiceDelElemento); // se imprimirá 2 en consola



//.includes: verifica si el elemento está incluído en el array
const miArray8 = [1, 2, 3];
const incluyeElElemento = miArray8.includes(3);

console.log(incluyeElElemento); // se imprimirá true en la consola



//aplico una función a c/elemento del array. La operación eleva al cuadrado el n°
const miArray9 = [1, 2, 3];
const resultado = miArray9.map((num) => Math.pow(num, 2));

console.log(resultado); // se imprimirá [1, 4, 9] en consola


//creo un nuevo array que contiene solo los elementos que cumplen con la condición. La condición es que el n°debe ser impar (ya que num % 2 devuelve 1 para números impares y 0 para números pares). 
//El resultado es un nuevo array que contiene los elementos que cumplen con la condición. En este caso, [1, 2, 3] se filtra y solo los números impares, 1 y 3, se incluyen en el nuevo array [1, 3].
const miArray10 = [1, 2, 3];
const resultado1 = miArray10.filter((num) => num % 2);

console.log(resultado1); // se imprimirá [1, 3] en la consola




//.every: verifica si todos los elementos del array cumplen con una condición específica.
const miArray11 = [1, 2, 3];
const resultado2 = miArray11.every((num) => num > 1);

console.log(resultado2); // se imprimirá false en consola



//.some: verifico si al menos un elemento del array es igual a 3. 
const miArray12 = [1, 2, 3];
const cumpleCondicion = miArray12.some((num) => num == 3);

console.log(cumpleCondicion); // se imprimirá true en consola




//.fill:reemplaza todos los elementos del array con el valor 10.
const miArray13 = [1, 2, 3];
const nuevoArray = miArray13.fill(10);

console.log(nuevoArray); // se imprimirá [10, 10, 10] en consola




//.reduce: La función de reducción suma cada elemento (num) al acumulador (acc). 
//acc inicial es 0, num es 1. La suma es 1. Nuevo valor de acc es 1.
//acc actual es 1, num es 2. La suma es 3. Nuevo valor de acc es 3.
//acc actual es 3, num es 3. La suma es 6. Nuevo valor de acc es 6.
const miArray14 = [1, 2, 3];
const resultado3 = miArray14.reduce((acc, num) => acc + num, 0);

console.log(resultado3); // Esto imprimirá 6 en consola



//.concat: combina 2 array
const miArray15 = [1, 2, 3];
const nuevoArray2 = miArray15.concat([4, 5]);

console.log(nuevoArray2); // Se imprimirá [1, 2, 3, 4, 5] en consola



//.reverse: invierte el orden de los elementos
const miArray16 = [1, 2, 3];
const arrayReverso = miArray16.reverse();

console.log(arrayReverso); // se imprimirá [3, 2, 1] en consola




//.sort: ordena en orden lexicográfico (alfabético) esta cadena de texto
const miArray17 = ["manzana", "banana", "cereza"];
const arrayOrdenado = miArray17.sort();

console.log(arrayOrdenado); // Se imprimirá ["banana", "cereza", "manzana"] en consola




//.join: toma un argumento, que es el separador que se utilizará para unir los elementos del array (-)
const miArray18 = ["manzana", "banana", "cereza"];
const cadenaUnida = miArray18.join(' - ');

console.log(cadenaUnida); // Se imprime "manzana - banana - cereza" en consola



//.flat: aplana/elimina un array anidado en el pcipal
const miArray19 = [1, 2, [3]];
const arrayAplanado = miArray19.flat();

console.log(arrayAplanado); // Se imprime [1, 2, 3] en consola




//.find: función de búsqueda, se pone el argumento, busca al elemnto de la posicion 1 del array
const miArray20 = [1, 2, 3];
const resultado4 = miArray20.find((num, i) => i === 1);

console.log(resultado4); // Se imprime 2 en consola




//devuelve el índice buscado
const miArray21 = [1, 2, 3];
const indiceEncontrado = miArray21.findIndex((num) => num === 2);

console.log(indiceEncontrado); // se imprime 1 en consola




//.toString: convierte a los elementos en una sola cadena de texto separado con comas
const miArray22 = ["perro", "gato", "pájaro"];
const cadena = miArray22.toString();

console.log(cadena); // se imprime "perro,gato,pájaro" en consola




//.slice: imprime desde la posición 1 a la 3 del array
const miArray23 = ["casa", "auto", "cocina", "televisor", "mesa"];
const subArray = miArray23.slice(1, 4);

console.log(subArray); // Imprimirá ["auto", "cocina", "televisor"] en consola



//el 1er argumento 1, indica la posición en la que se empieza a modificar el array. El 2do argumento 0, indica ctos elementos se eliminarán, en este caso 0
const miArray24 = ["manzana", "naranja"];
miArray24.splice(1, 0, "banana", "cereza");

console.log(miArray); // se imprimirá ["manzana", "banana", "cereza", "naranja"] en consola

//Otro ejemplo de .splice
const miArray25 = ["manzana", "banana", "cereza", "naranja"];
const elementosEliminados = miArray25.splice(1, 2, "pera", "uva");

console.log(miArray25); // se imprimirá ["manzana", "pera", "uva", "naranja"] en la consola
console.log(elementosEliminados); // se imprimirá ["banana", "cereza"] en consola





//Array.isArray verifica si es o no un array
const esUnArray = Array.isArray("[1, 2, 3]");

console.log(esUnArray); // Imprimirá FALSE en consola

//otro ejemplo TRUE de Array.isArray
const miArray26 = [1, 2, 3];
const esUnArray2 = Array.isArray(miArray26);

console.log(esUnArray2); // Imprimirá TRUE en consola



//Array.from: devuelve un array con los elementos de la cadena de texto en elementos individuales
const resultado5 = Array.from("123");

console.log(resultado5); // Esto imprimirá ['1', '2', '3'] en consola

