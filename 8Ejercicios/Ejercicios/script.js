//1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
//console.log(numerosPares);
var nrosPares= (numerosPares);
document.getElementById("pares").innerHTML = nrosPares;

//2
function CalcularPromedio(arr)  {   
     return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

    var resultado = (CalcularPromedio([10, 20, 30]));
    
    document.getElementById("promedio").innerHTML = resultado;

//3

function mostrarLista() {
    const arrayLista = ['elemento1', 'elemento2', 'elemento3']

    let items = ''

    for (let index = 0; index < arrayLista.length; index++) {

        setTimeout(() => {
            items += '<li>' + arrayLista[index] + '</li>'

            document.getElementById('lista').innerHTML = items

        }, 1000*index);
    }
}

//4a

function saludar(nombre) {
    alert("Hola " + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

//4b
const operacion = (nro1,nro2, callback) => {
    return callback  (nro1,nro2)
  }
  
  operacion (2,4, (a,b) =>{   
    var suma= (a+b) 
    document.getElementById("sum").innerHTML = suma;
}
    )
  operacion (2,4, (a,b) =>{   
    var resta= (a-b)
    document.getElementById("res").innerHTML = resta;
}
    )
  operacion (2,4, (a,b) =>{    
    var multiplicacion= (a*b)
    document.getElementById("mul").innerHTML = multiplicacion;
}
    )
  operacion (2,4, (a,b) =>{
    var division= (a/b)
    document.getElementById("div").innerHTML = division;
 }
    )


//5
let valor = 0;

function increment() {
  valor++;
  document.getElementById("valor").innerText = valor;
  }

function decrement() {
    if (valor > 0) {
      valor--;
      document.getElementById("valor").innerText = valor;
    }
  }

//6
function color() {
    let paragraphs = document.getElementsByTagName("p")
   
    for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "blue";
    }
  }

//7/8

let contador = 0;
const lista = document.getElementById("miLista");
const agregarBoton = document.getElementById("agregarBoton");

agregarBoton.addEventListener("click", () => {
  contador++;
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = `Elemento ${contador} `;

  const eliminarBoton = document.createElement("button");
  eliminarBoton.textContent = "X";
  eliminarBoton.addEventListener("click", () => {
    lista.removeChild(nuevoItem);
  });

  nuevoItem.appendChild(eliminarBoton);
  lista.appendChild(nuevoItem);
});
