// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

//Datos para la búsqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Variables
const autos = obtenerAutos();
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');


//Event Listeners

//Seleccionar el input Marca del formulario
//marca.addEventListener('input',function(e){
    //console.log('algo cambio');
    //datosBusqueda.marca = this.value;
marca.addEventListener('input',e => {
    //console.log('algo cambio');
    datosBusqueda.marca = e.target.value;// con arrow function se usa 'e.target' en vez the 'this'
    //console.log(datosBusqueda)
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Seleccionar el input Año del formulario
year.addEventListener('input',e => {
    //Ponemos Number() porque hay valores de año almacenados como números y otros como string.
    datosBusqueda.year = Number(e.target.value);// con arrow function se usa 'e.target' en vez the 'this'
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Mostrar autos en el DOM
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos);
});


//Funciones

//Mostrar autos en el DOM
function mostrarAutos(autos) {
    const contenedor = document.querySelector('#resultado');
     
    //Limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

    //Construir el HTML de los autos
    autos.forEach(auto => {
        //console.log(auto);
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas -
             Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color} 
            </p>
        `;
        contenedor.appendChild(autoHTML);
    })
}


//Filtrar los autos usando Higher Order Functions
//(es una función que toma otra función como argumento)
function filtrarAuto() {
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear);
    //console.log(resultado)
    //Mostrar el filtrado en el HTML
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        alert('No hay resultados');
    }
}

//Filtrar por Marca
function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        //console.log(auto);
        //console.log(datosBusqueda.marca);
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}

//Filtrar por Año
function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } else {
        return auto;
    }
}

//Obtener los datos de los autos
function obtenerAutos() {
    return [
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

};
