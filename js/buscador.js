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
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');



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
    datosBusqueda.year = Number(e.target.value);
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Seleccionar el input Precio Min del formulario
minimo.addEventListener('input',e => {
    datosBusqueda.minimo = Number(e.target.value);
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Seleccionar el input Precio Max del formulario
maximo.addEventListener('input',e => {
    datosBusqueda.maximo = Number(e.target.value);
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Seleccionar el input Puertas del formulario
puertas.addEventListener('input',e => {
    datosBusqueda.puertas = Number(e.target.value);
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Seleccionar el input Transmision del formulario
transmision.addEventListener('input',e => {
    datosBusqueda.transmision = e.target.value;
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Seleccionar el input Color del formulario
color.addEventListener('input',e => {
    datosBusqueda.color = e.target.value;
    //Llamar la función de filtrar autos
    filtrarAuto();
});

//Mostrar autos en el DOM
document.addEventListener('DOMContentLoaded',() => {
    //console.log(datosBusqueda)
    mostrarAutos(autos);
});


//Funciones

//Limpiar los resultados anteriores
function limpiarHTML() {
    const contenedor = document.querySelector('#resultado');

    while(contenedor.firstChild) {
       contenedor.removeChild(contenedor.firstChild);
    }
}
 
//Mostrar autos en el DOM
function mostrarAutos(autos) {
    limpiarHTML();

    const contenedor = document.querySelector('#resultado');
    
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

//Mostrar mensaje alerta cuando no hay resultado en el filtrado
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

//Filtrar los autos usando Higher Order Functions
//(es una función que toma otra función como argumento)
function filtrarAuto() {
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear)
    .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    .filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado)
    //Mostrar el filtrado en el HTML
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
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

//Filtrar por Precio Minimo
function filtrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

//Filtrar por Precio Maximo
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto;
    }
}

//Filtrar por Puertas
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;
    }
}


//Filtrar por Transmision
function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

//Filtrar por Color
function filtrarColor(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
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
