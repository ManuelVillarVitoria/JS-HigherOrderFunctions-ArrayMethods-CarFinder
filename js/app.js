const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

console.table(autos);


/*  EXPLICACIÓN DE LOS ARRAY METHODS.

1.-.forEach() es útil para listar todos los elementos de un array, pero no crea un nuevo array.

2.-.map() es útil para listar todos los elementos de un array, creando un nuevo array.

3.-.filter() crea un nuevo array basado en una condición que es evaluada, y si cumnple la condición,retorna 
    todos los elementos que cumplen dicha condición.

4.-.find() crea un nuevo array basado en una condición que es evaluada, y si cumnple la condición,retorna solo 
	el primer elemento que encuentre del array que cumpla la condición.
	
5.-.reduce() toma todos los valores del array y retorna un valor único.

6.-.some() recorre todos los valores del array y retorna true o false en función de si se cumple o no la condición.
*/

/**********************************************
 * EJEMPLOS CON LOS ARRAY METHODS
**********************************************/

/**********************************************
 * Mostramos todos los automoviles.
**********************************************/

//De forma vieja
for(let i = 0; i < autos.length; i++) {
	//console.log(autos[i])
}

//Con forEach
autos.forEach(auto => console.log(auto));

/**********************************************
 * Mostramos solo los coches de color rojo.
**********************************************/

//De forma vieja
for(let i = 0; i < autos.length; i++) {
	if(autos[i].color === 'Rojo') {
		//console.log(autos[i])
	}
}


//Con forEach (es mejor utilizar .filter() en este caso)
let resultado = [];
autos.forEach(auto => {
	if(auto.color === 'Rojo') {
		resultado.push(auto);
	}
});
//console.log(resultado);


//Con filter
/*
let resultado2 = autos.filter(auto => {
	return auto.color  === 'Rojo';
})
*/
let resultado2 = autos.filter(auto => auto.color === 'Rojo');
console.log(resultado2);

/*******************************************************************
 * Mostramos todos los automoviles y los mostramos en un nuevo array.
********************************************************************/

//Con forEach no se puede hacer porque no retorna un nuevo array
/*
let resultado1 = autos.forEach(auto => {
	return auto;
});
console.log(resultado1); // undefined
*/

//Con map
/*
let resultado1 = autos.map(auto => {
	return auto;
});
*/
let resultado1 = autos.map(auto => auto);
console.log(resultado1);

/*******************************************************************
 * Mostramos todos los automoviles a partir del 2016 de la marca BMW .
********************************************************************/

//Usando filter
let resultado3 = autos.filter(auto => auto.year >= 2016 && auto.marca ==='BMW');
console.log(resultado3);


/***************************************************************
 * Mostrar el primer Mustang que se encuentre en el array.
***************************************************************/

//Usando find
let resultado4 = autos.find(auto => auto.modelo ==='Mustang');
console.log(resultado4);


/***************************************************************
 * Mostrar el precio total si vendieramos todos los automóviles
***************************************************************/

//Usando reduce
//'total' es el primer valor donde se van sumando los precios del resto de autos, 
//a medida que .reduce() va iterando el array. Inicializamos el resultado final con valor 0.
let resultado5 = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(resultado5);//910000


/**************************************************************************
 * Mostrar si hay o no hay autos Ferrari de más de 1.000.000 € en el array.
***************************************************************************/

//Usando some
let resultado6 = autos.some(auto => auto.precio > 1000000 && auto.marca ==='Ferrari');
console.log(resultado6); //false